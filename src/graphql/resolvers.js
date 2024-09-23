const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");
const { login } = require("./auth.resolver");

const resolvers = {
  Query: {
    product,
    allProducts,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
  },
};

module.exports = { resolvers };
