const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");
const { login } = require("./auth.resolvers");
const { addCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");

const CategoryName = new RegularExpression(
  "CategoryNameType",
  /^[a-zA-Z0-9]{3,8}$/
);

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
  CategoryName,
};

module.exports = { resolvers };
