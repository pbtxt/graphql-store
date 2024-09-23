const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");
const { login } = require("./auth.resolver");
const { addCategory } = require("./category.resolvers");

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
    addCategory,
  },
};

module.exports = { resolvers };
