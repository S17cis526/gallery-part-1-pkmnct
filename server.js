"use strict;"

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */

var http = require("http");
var fs = require("fs");
var port = 2000;

function serveImage(fileName, req, res) {
    var data = fs.readFile("images/" + fileName, function(err, data) {
      if(err) {
        console.error(err);
        res.statusCode = 500;
        res.statusMessage = "Server Error";
        res.end();
        return;
      }
      res.setHeader("Content-Type","image/jpeg");
      res.end(data);
    });
}

var server = http.createServer(function (req, res) {
  switch(req.url) {
    case "/ace":
    case "/ace.jpg":
    case "/ace.jpeg":
      serveImage("ace.jpg", req, res);
      break;
    case "/bubble":
    case "/bubble.jpg":
    case "/bubble.jpeg":
      serveImage("bubble.jpg", req, res);
      break;
    case "/chess":
    case "/chess.jpg":
    case "/chess.jpeg":
      serveImage("chess.jpg", req, res);
      break;
    case "/fern":
    case "/fern.jpg":
    case "/fern.jpeg":
      serveImage("fern.jpg", req, res);
      break;
    case "/mobile":
    case "/mobile.jpg":
    case "/mobile.jpeg":
      serveImage("mobile.jpg", req, res);
      break;
    default:
      res.statusCode = 404;
      res.statusMessage = "Resource not found";
      res.end();
      break;
  }
});

server.listen(port, function() {
  console.log("Server is running on port " + port);
});
