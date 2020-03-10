const { Router } = require('express')
const models = require("../models")
const answer = Router()
const passport = require('passport')

answer.get('/', (req, res) => {

    models
        .Answer
        .findAll()
        .then(data => res.json(data))
})

answer.get('/search?', (req, res) => {
    const id = req.query.questionId
    models
        .Answer
        .findAll({
            where: {
                questionId: id
            }
        })
        .then(data => res.json(data))
})

answer.get('/:id', (req, res) =>
    models
        .Answer
        .findOne({ where: { id: req.params.id } })
        .then(data => res.json(data))
);

answer.put('/:id', (req, res) =>
    models
        .Answer
        .update(
            { text: req.body.text },
            { where: { id: req.params.id } }
        )
        .then(() => res.send('Done'))
);


answer.post(
    '/',
    passport.authenticate('jwt'),
    (req, res) => {
        models
            .Answer
            .create(req.body)
            .then(data => res.json(data))
    }
)

answer.delete('/:id',
    passport.authenticate('jwt'),
    (req, res) =>
        models
            .Answer
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.send("Done"))
);

module.exports = answer