const router = require('express').Router();
const passport = require('passport');
const passportConf = require("../passport");
const utills = require('../utils');


router.get('/googlelogin', passport.authenticate('google', { scope: ["profile", "email"] }));

router.get("/googlelogin/callback", passport.authenticate('google', { failureRedirect: "/login" }), (req, res) => {
    console.log("in callback...");
    const token =  utills.signToken(req.user);
    return res.status(200).cookie('jwt', token).redirect("https://pokebattles12.herokuapp.com")
})

module.exports = router;