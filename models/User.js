const Sequelize = require ('sequelize');
const sequelize = require('../sequelize')

const Model = Sequelize.Model;

class User extends Model{}
User.init({
    id: {
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},

	name: {
		type: Sequelize.STRING,
		notEmpty: true
	},

	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
	},

	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
},
{
    sequelize,
	modelName: 'User'
})

module.exports = User
