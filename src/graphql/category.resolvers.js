const CategoryService = require("./../services/category.service");

const service = new CategoryService();

const addCategory = (_, args) => {
  const newCategoryInfo = args.dto;
  
  return service.create(newCategoryInfo);
};

module.exports = { addCategory };
