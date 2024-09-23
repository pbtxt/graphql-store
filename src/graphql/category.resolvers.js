const CategoryService = require("./../services/category.service");
const boom = require("@hapi/boom");
const service = new CategoryService();

const addCategory = async (_, args, context) => {
  const newCategoryInfo = args.dto;
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("jwt is not valid");
  }
  return service.create(newCategoryInfo);
};

module.exports = { addCategory };
