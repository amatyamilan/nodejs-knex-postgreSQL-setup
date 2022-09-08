// const moment = require('moment')
const knex = require("../../config/database.config");

const tableName = "UserPreferences";

const create = async (data) => {
  const userPreferenceData = {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return knex(tableName).insert(userPreferenceData);
};

const findByUserId = async (userId) => {
  const preferences = knex(tableName).where("userId", "=", userId);

  return preferences;
};

const updateByUserId = async (data) => {
  const userPreferenceData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  return knex(tableName)
    .where({ userId: data.userId, id: data.id })
    .update(userPreferenceData);
};

const destroy = async (id) => {
  return knex(tableName).where("id", id).del();
};

module.exports = {
  create,
  findByUserId,
  updateByUserId,
  destroy,
};
