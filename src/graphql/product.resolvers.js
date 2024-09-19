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

module.exports = { product, allProducts };
