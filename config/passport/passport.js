const bCrypt = require('bcrypt')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = function (passport, user) {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        },
        function (req, email, password, done) {
            const generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };

            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                }
                else {
                    const userPassword = generateHash(password);

                    const data =
                    {
                        email: email,
                        password: userPassword,
                        name: req.body.name,
                    };

                    User.create(data).then(function (newUser) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }

                    });

                }

            });
        }

    ));
    passport.use('local-signIn', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        async function (req, email, password, done) {

            const compareHash = function (password, hash) {

                return bCrypt.compareSync(password, hash);

            };
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                done(null, false, { message: 'No such user.' })
                return
            } else if (!compareHash(password, user.password)) {
                done(null, false, { message: 'Wrong passport.' })
                return
            }
            done(null, user)

        }

    ))

    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'CHANGE_THIS_SECRET',
    },
        function (jwt_payload, done) {
            console.clear()
            console.log(JSON.stringify(jwt_payload))


            User.findByPk(jwt_payload.id)
                .then(
                    function (user) {
                        console.log(JSON.stringify(user))
                        if (user) return done(null, user);
                        else return done(null, false);
                    }
                );
        }
    )
    );

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}