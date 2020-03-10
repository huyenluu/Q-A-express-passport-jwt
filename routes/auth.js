const jwt = require('jsonwebtoken')

module.exports = function(app , passport) {

    app.post('/signup', 
    passport.authenticate('local-signup'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.send(req.user);
    }
    );
    // app.post('/signin', 
    // passport.authenticate('local-signIn'),
    // function(req, res) {
    //     res.send(req.user);
    // }
    // );

    // app.post(
    //     '/signin',
    //     function (req, res, next) {
    //         console.clear()
    //         console.log('IN SIGNIN')
    //         passport.authenticate('local-signIn', 
    //           {session: false},
    //           (err, user, info) => {
    //             console.log('IN AUTHENTICATE CALLBACK')
    //             const token = jwt.sign(user, 'your_jwt_secret');
    //             console.log(user, token)
    //             return res.json({user, token});
    //           })(req, res);
    //     }  
    // )
}
