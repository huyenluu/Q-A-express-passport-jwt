const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/config/config.json')[env];

var config = {};

const dotenv = require('dotenv');
dotenv.config();

config.database = process.env.QA_DBNAME
config.username = process.env.QA_DBUSER
config.password = process.env.QA_DBPASS
config.host = process.env.QA_DBSERVER
config.dialect = "mysql"

let sequelize;


sequelize = new Sequelize(config.database, config.username, config.password, {host: config.host, dialect: config.dialect});


module.exports = sequelize
