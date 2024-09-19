const ProductService = require("./../services/product.service");
const service = new ProductService();

const product = async (_, args) => {
  const id = args.id;
  const product = await service.findOne(id);

  return product;
};

const allProducts = async (_, args) => {
  const products = await service.find({});

  return products;
};

const addProduct = async (_, args) => {
  const productInfo = args.dto;
  const newProduct = await service.create(productInfo);

  return newProduct;
};

const updateProduct = async (_, args) => {
  const id = args.id;
  const infoToUpdate = args.dto;
  const productUpdated = await service.update(id, infoToUpdate);

  return productUpdated;
};

const deleteProduct = async (_, args) => {
  const id = args.id;
  const deletedProduct = await service.delete(id);

  return deletedProduct.id;
};

module.exports = {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
