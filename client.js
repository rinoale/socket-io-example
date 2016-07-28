var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function (){
  console.log('connected');
});

socket.on('tweet', function (tweet) {
  console.log('tweet from', tweet.user);
  console.log('contents:', tweet.text);
});

socket.on('disconnect', function () {
  console.log('disconnected');
})
