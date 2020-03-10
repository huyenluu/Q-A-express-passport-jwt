const Sequelize = require('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;
class Answer extends Model {}
Answer.init({
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
    type: Sequelize.INTEGER,
    allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE
    }

},
{
sequelize,
modelname: "Answer"
}
);



module.exports = Answer
