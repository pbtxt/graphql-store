const { product, allProducts, addProduct } = require("./product.resolvers");

const resolvers = {
  Query: {
    product,
    allProducts,
  },
  Mutation: {
    addProduct,
  },
};

module.exports = { resolvers };
