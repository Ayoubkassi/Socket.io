const io = require('socket.io')(3000, {
  cors : {
    origin : ["https://localhost:33765/client"],
  }
})


io.on('connection', socket => {
  console.log(socket.id);
})
