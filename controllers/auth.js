const jwt = require('jsonwebtoken')
 
 module.exports = function(app , passport) {

    app.post(
        '/signup', 
        function (req, res, next) {
            passport.authenticate('local-signup', 
              {session: false},
              (err, user, info) => {
                const { id, email, name } = user

                const payload = { id, email, name }

                const token = jwt.sign(payload, 'CHANGE_THIS_SECRET')

                return res.json({ user: payload, token })
              })(req, res)
        }
    )

    app.post(
        '/signin',
        function (req, res, next) {
            passport.authenticate('local-signIn', 
              {session: false},
              (err, user, info) => {
                const { id, email, name } = user

                const payload = { id, email, name }

                const token = jwt.sign(payload, 'CHANGE_THIS_SECRET')

                return res.json({ user: payload, token })
              })(req, res)
        }  
    )

}
