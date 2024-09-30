// create web server
// node comments.js
// http://localhost:3000
// http://localhost:3000/comments

// create web server
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/comments' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var comments = {
      user: 'John',
      message: 'Hello World'
    };
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
