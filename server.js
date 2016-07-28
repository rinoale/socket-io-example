var io = require('socket.io')();
io.on('connection', function(socket){
  console.log('Socket connection established');

  var tweet = {user: "test_user", text: "Hello, world!"};
  
    var interval = setInterval(function () {
      socket.emit("tweet", tweet);
    }, 1000);

    socket.on('disconnect', function () {
      console.log('socket disconnected');
      clearInterval(interval);
    })
});
io.listen(3000);

console.log('Listening to port 3000');
