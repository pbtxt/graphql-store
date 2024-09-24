const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("@apollo/server/plugin/landingPage/default");
const { expressMiddleware } = require("@apollo/server/express4");
const { loadFiles } = require("@graphql-tools/load-files");
const { resolvers } = require("./resolvers");
const { buildContext } = require("graphql-passport");
const {
  typeDefs: scalarsTypeDefs,
  resolvers: scalarsResolvers,
} = require("graphql-scalars");

const useGraphql = async (app) => {
  const allTypeDefs = [
    ...(await loadFiles("./src/**/*.graphql")),
    scalarsTypeDefs,
  ];
  const allResolvers = [resolvers, scalarsResolvers];
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });

  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );
};

module.exports = useGraphql;
