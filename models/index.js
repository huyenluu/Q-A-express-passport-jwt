"use strict";

const fs = require('fs');
const path = require('path');
const sequelize = require('../sequelize')
const basename = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

console.log(db)

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
      db[modelName].associate(db);
  }
});

db.sequelize = sequelize

module.exports = db;
