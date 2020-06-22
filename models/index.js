let Sequelize = require('sequelize');

let env = process.env.NODE_ENV || 'development';
let config = require(__dirname + '/../config.json')[env];

let db = {};

let sequelize;
console.log(config.use_env_variable)
console.log(__dirname + '/../config.json')

if (config.use_env_variable) {
  console.log(process.env[config.use_env_variable])
  console.log(config.use_env_variable)
  //sequelize = new Sequelize(process.env[config.use_env_variable], config)
  sequelize = new Sequelize(process.env.DATABASE_URL, config)
} else {
  sequelize = new Sequelize(config)
}

const model = sequelize['import']('./client.js')
db[model.name] = model;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
