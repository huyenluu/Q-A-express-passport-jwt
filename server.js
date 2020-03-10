const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors');

const models = require("./models");
const userController = require('./controllers/user-controller')
const questionController = require('./controllers/questions-controller')
const answerController = require('./controllers/answers-controller')

const port = 8081
const app = express()

// For CORS
app.options('*', cors());
app.use(cors())

//For body parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Model Controllers
app.use('/users', userController)
app.use('/questions', questionController)
app.use('/answers', answerController)

//load passport strategies
require('./config/passport/passport')(passport, models.User);

//Routes
require('./controllers/auth.js')(app, passport);

app.get("/", (req, res) => {
    res.send('hello app')
})

//Sync Database
models
    .sequelize
    .sync()
    .then(
        () =>
            app.listen(
                port,
                function () {
                    console.log('listening on port:', port)
                }
            )
    )
    .catch(function(err) {
 
        console.log(err, "Something went wrong with the Database Update!")
     
    })
