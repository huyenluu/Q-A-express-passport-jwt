const { Router } = require('express')
const models = require("../models")
const user = Router()


user.get('/', (req, res) => {
    models
        .User
        .findAll()
        .then(data => res.json(data))
})


module.exports = user
