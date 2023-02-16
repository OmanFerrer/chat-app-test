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

const generateID = () => Math.random().toString(36).substring(2, 10);
let messages = [];

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);

  socket.on('joinChat', () => {
    socket.join('test-chat');
    socket.emit('messagesList', messages);
  });

  socket.on('newMessage', (message) => {
    const newMessage = {
      id: generateID(),
      ...message,
    };
    messages.push(newMessage);
    socket.to('test-chat').emit('roomMessage', newMessage);
    socket.emit('messagesList', messages);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});