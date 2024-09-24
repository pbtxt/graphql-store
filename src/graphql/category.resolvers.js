const CategoryService = require("./../services/category.service");
const service = new CategoryService();
const { checkRolesGql } = require("./../utils/checkRolesGql");
const { checkJwtGql } = require("./../utils/checkJwtGql");

const addCategory = async (_, args, context) => {
  const newCategoryInfo = args.dto;

  const user = await checkJwtGql(context);
  checkRolesGql(user, "admin");

  return service.create({
    ...newCategoryInfo,
    image: newCategoryInfo.image.href,
  });
};

module.exports = { addCategory };
