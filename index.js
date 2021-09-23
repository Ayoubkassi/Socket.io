const http = require('http');
const WebSocketServer = require("websocket").server;
let connection = null;

const httpserver = http.createServer((req,res) => {
  console.log("we have received a request");
});

const websocket = new WebSocketServer({
  "httpServer" : httpserver
})

websocket.on("request", request => {
    connection =  request.accept(null , request.origin);
    connection.on("onopen", e => console.log("Openeed!!!"))
    connection.on("onclose", e => console.log("Clooosed!!!"))
    connection.on("onmesssage" , message => {
      console.log(`Message Received : ${message}`);
    })
})

httpserver.listen(8080 , () => console.log(`My server is listening on port 8080`))
