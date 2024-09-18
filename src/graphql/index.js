const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("@apollo/server/plugin/landingPage/default");
const { expressMiddleware } = require("@apollo/server/express4");
const { loadFiles } = require("@graphql-tools/load-files");

const resolvers = {
  Query: {
    getBook: () => {
      return {
        title: "Libro 1",
        author: "Paola B.",
      };
    },
  },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./src/**/*.graphql"),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });

  await server.start();
  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
      }),
    })
  );
};

module.exports = useGraphql;
