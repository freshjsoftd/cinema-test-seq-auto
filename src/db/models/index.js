import Sequelize from 'sequelize';
import configByEnvironment from '../../config/postgresConfig.js';
import initModels from './init-models.js';

const environment = process.env.NODE_ENV || 'development';
const config = configByEnvironment[environment];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
