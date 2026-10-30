import Sequelize from 'sequelize';
import configByEnv from '../../config/postgresConfig.js';
import initModels from './init-models.js';

const env = process.env.NODE_ENV || 'development';
const config = configByEnv[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
