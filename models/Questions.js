const Sequelize = require('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;
class Question extends Model {}
Question.init({
  // attributes
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
      type: Sequelize.DATE,
      
  },
  userId: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  description: {
      type: Sequelize.TEXT
  }
}, {
  sequelize,
  modelName: 'Question'
  // options
});

module.exports = Question
