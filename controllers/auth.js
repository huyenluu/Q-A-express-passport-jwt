const jwt = require('jsonwebtoken')
 
 module.exports = function(app , passport) {

    app.post(
        '/signup', 
        passport.authenticate('local-signup'),
        function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.send(req.user);
        }
    )

    app.post(
        '/signin',
        function (req, res, next) {
            console.clear()
            console.log('IN SIGNIN')
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
