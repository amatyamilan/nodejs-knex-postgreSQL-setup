const UserPreferences = require("./user-preference.model");

const index = async (req, res) => {};

const create = async (req, res) => {
  await UserPreferences.create(req.query);

  return res.status(200).send({
    message: "User created successfully",
  });
};

const getUsersPreferences = async (req, res) => {
  try {
    const preferences = await UserPreferences.findByUserId(req.query.userId);

    return res.status(200).send(preferences);
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

const edit = async (req, res) => {
  try {

    await UserPreferences.updateByUserId(req.query);

    return res.status(200).send({
      message: "User preference updated successfully",
    });
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

const destroy = async (req, res) => {
  try {
    await UserPreferences.destroy(req.query.prefeId);
    return res.status(200).send({
      message: "User preference deleted successfully",
    });
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

module.exports = {
  index,
  create,
  edit,
  destroy,
  getUsersPreferences,
};
