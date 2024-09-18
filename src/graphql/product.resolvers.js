const product = (_, args) => {
  return {
    id: args.id,
    name: "Product 1",
    price: 100.0,
    description: "desc",
    image: "https://image.asas",
    createdAt: new Date().toISOString(),
  };
};

const allProducts = (_, args) => {
  return [];
};

module.exports = { product, allProducts };
