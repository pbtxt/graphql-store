const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");

const resolvers = {
  Query: {
    product,
    allProducts,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
  },
};

module.exports = { resolvers };
