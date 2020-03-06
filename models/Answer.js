const Sequelize = require('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;
class Answer extends Model {}
Answer.init({
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
text: {
    type: Sequelize.STRING,
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
