import 'dotenv/config';

export default {
  development: {
    username: process.env.DB_PG_USER,
    password: process.env.DB_PG_PWD,
    database: process.env.DB_PG_NAME,
    host: process.env.DB_PG_HOST,
    port: process.env.DB_PG_PORT,
    dialect: 'postgres',
    migrationStorage: 'json',
    seedersStorage: 'json',
  },
  test: {},
  production: {},
};