const { Router } = require('express')
const models = require("../models")
const questions = Router()
const passport = require('passport')

questions.get('/',
  passport.authenticate('jwt'),
  (req, res) => {
    console.clear()
    console.log(req.user.name)

    models
        .Question
        .findAll()
        .then(data => res.json(data))
})

questions.post('/', (req, res) => {
    models
        .Question
        .create(req.body)
        .then(data => res.json(data))
})

questions.get('/:id', (req, res) => {
    models
   .Question
   .findOne({ where: { id: req.params.id } })
   .then(data => res.json(data))
});

questions.delete('/:id', (req, res) =>
 models
   .Question
   .destroy({
     where: {
       id: req.params.id
     }
   })
   .then(() => res.send("Done"))
);


module.exports = questions