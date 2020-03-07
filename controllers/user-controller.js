const { Router } = require('express')
const models = require("../models")
const user = Router()


user.get('/', (req, res) => {
    models
        .User
        .findAll()
        .then(data => res.json(data))
})

user.get('/:id', (req, res) =>
 models
   .User
   .findOne({ where: { id: req.params.id } })
   .then(data => res.json(data))
);

module.exports = user
