const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Artist = require('./artist')(sequelize, DataTypes);
db.Song = require('./song')(sequelize, DataTypes);

module.exports = db;