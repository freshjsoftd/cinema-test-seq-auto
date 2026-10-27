'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const { initModels } = require('./init-models');
// const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + require(path.resolve('.sequelizerc')).config)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// const db = initModels(sequelize);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file !== 'init-models.js' &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
