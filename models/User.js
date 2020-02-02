const Sequelize = require ('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;

class User extends Model{}
User.init({
    id : {
        type : Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    name : {
        type : Sequelize.STRING,
        allowNull: false,
    },

    email : {
        type : Sequelize.STRING,
        allowNull: false,
    },

    password : {
        type : Sequelize.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'User'
})

module.exports = User