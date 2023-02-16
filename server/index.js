const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8081']
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});