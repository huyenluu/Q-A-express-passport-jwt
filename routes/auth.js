 module.exports = function(app , passport) {

    app.post('/signup', 
    passport.authenticate('local-signup'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.send(req.user);
    }
    );
    app.post('/signin', 
    passport.authenticate('local-signIn'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.send(req.user);
    }
    );
}