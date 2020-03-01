
const jwt = require('jsonwebtoken');
const user = require('./database/connector');

class utills{
    static signToken (user) {
        return jwt.sign({ data: user }, process.env.JWT_SECRET, {
            expiresIn: 604800
        })
    }
     static push (data){
        return data = "in func";
    }
}



module.exports = utills;