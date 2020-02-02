const express = require('express')

const userController = require('./controllers/user-controller')

const app = express()

app.use('/users', userController)

app.use('/questions', questionController)

app.use('/answers', answerController)

const port = 8080

app.listen(
    port,
    function () {
        console.log('listening on port:', port)
    }
)
