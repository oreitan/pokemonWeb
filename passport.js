const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const user = require('./database/connector').Users;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;





passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    //callbackURL: `http://localhost:${process.env.PORT}/api/googlelogin/callback`
    //callbackURL:`http://127.0.0.1:8080/login/googlelogin/callback`
    callbackURL: `https://pokebattles12.herokuapp.com/login/googlelogin/callback`
}, async (accessToken, referenceToken, profile, done) => {

    // console.log('profile', profile);
    //console.log(profile.id)
    // console.log('accessToken', accessToken);
    // console.log('refreshToken', referenceToken);
    const existingUser = await user.findOne({
        "id": profile.id
    });
    //console.log(existingUser);
    if (existingUser) {
        //console.log("user is in the system");
        return done(null, existingUser);
    }

    const newUser = user({
        id: profile.id,
        email: profile.emails[0].value,
        battles: [],
        win: 0,
        lose: 0
    });
    await newUser.save();
    done(null, newUser);

}));

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {

    await user.findOne({
        "google.id": jwt_payload.data.google.id
    }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));