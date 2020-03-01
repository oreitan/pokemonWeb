const dotenv = require('dotenv').config();
const app = require('./app');
const http = require('http');
const port = process.env.PORT || 8080;
const socketio = require('socket.io'); 
const testfun = require('./utils');


let server = http.createServer(app).listen(port);

let io = socketio.listen(server);
io.sockets.on  ('connection',function (socket){
    console.log("in push");
    
    socket.on('requestpush',(data)=>{
        data=testfun.push(data);
        
        socket.emit('push',(data));
        console.log("out push")

    });
  
});