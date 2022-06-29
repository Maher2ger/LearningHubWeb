//commentation done

const http = require('http');
//Import the app file with all routes and middlewares and routes
const app = require('./server/app');
//import socket modules
const {createServer} = require("http");
const {Server} = require("socket.io");
const sio = require("socket.io");
const socketConf = require("./server/socket");

// MongoDB Schema
const Recording = require('./server/models/recording');

//Server creation
const port = process.env.PORT || 3500;
const httpServer = createServer(app);
httpServer.listen(port, function () {
    console.log('Server works on port ' + port);
})


// Socket setup & pass server

const io = sio(httpServer, {
  cors: {
  origin: "*",
    methods: ["GET", "POST"]
}
  /*
  {
    origins: ["*"],   //accept socket connections from any origin
    handlePreflightRequest: (req, res) => {
        //important to not be blocked from the browser
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "my-custom-header",
            "Access-Control-Allow-Credentials": true
        });
        res.end();
    }*/
}
);



// ------ Socket connection init ----------


io.on('connection', socketConf);
