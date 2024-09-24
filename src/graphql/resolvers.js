const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("./product.resolvers");
const { login } = require("./auth.resolvers");
const { addCategory, getCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");

const CategoryName = new RegularExpression(
  "CategoryNameType",
  /^[a-zA-Z0-9]{3,8}$/
);

const resolvers = {
  Query: {
    product,
    allProducts,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
  CategoryName,
  Category: {
    products: getProductsByCategory,
  },
};

module.exports = { resolvers };
