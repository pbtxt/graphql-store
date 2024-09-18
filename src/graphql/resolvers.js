const { product, allProducts } = require("./product.resolvers");

const resolvers = {
  Query: {
    product,
    allProducts,
  },
};

module.exports = { resolvers };
