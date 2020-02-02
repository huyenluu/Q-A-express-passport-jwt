const Sequelize = require('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;
class Question extends Model {}
Question.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  date: {
      type: Sequelize.DATE,
      
  },
  user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  text: {
      type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'Question'
  // options
});

module.exports = Question
