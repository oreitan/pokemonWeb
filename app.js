const express = require("express");
const app = express();
const pokemon = require('./routers/pokemon');
const battle = require('./routers/battle');
const attacks = require('./routers/attacks');
const login = require('./routers/login');
const secureRoute = require('./routers/api') //temp
const passport = require('passport');
const path = require('path');
const userRouter = require('./routers/userRouter');

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use('/',express.static(path.join(__dirname, 'build')));

app.use(
    (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
      res.set('Content-Type', 'application/json');
      next();
    });
  
    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

app.use('/pokemon',pokemon);
app.use('/battle',battle);
app.use('/attacks',attacks);
app.use('/login',login);
app.use('/user',userRouter);
app.use('/user',passport.authenticate('jwt', {session: false}),secureRoute);

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })

// app.use('/',(req,res,next)=>{
//   res.sendFile(path.join(__dirname,'build','index.html'));
// });
app.use('*', (req, res) => {
  res.redirect('/');
});
module.exports = app;