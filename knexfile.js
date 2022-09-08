// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DEVELOPMENT_DB_NAME,
      user: process.env.DEVELOPMENT_DB_USERNAME,
      password: process.env.DEVELOPMENT_DB_PASSWORD,
      port: 5432,
      host: process.env.DEVELOPMENT_DB_HOST,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: process.env.STAGING_DB_NAME,
      user: process.env.STAGING_DB_USERNAME,
      password: process.env.STAGING_DB_PASSWORD,
      port: 5432,
      host: process.env.STAGING_DB_HOST,
    },
    pool: {
      min: 5,
      max: 20,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.PRODUCTION_DB_NAME,
      user: process.env.PRODUCTION_DB_USERNAME,
      password: process.env.PRODUCTION_DB_PASSWORD,
      port: 5432,
      host: process.env.PRODUCTION_DB_HOST,
    },
    pool: {
      min: 50,
      max: 100,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
    },
  },
};
