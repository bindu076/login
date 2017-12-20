// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
// });

// var http = require('http'),
    // fs = require('fs');


// fs.readFile('create.html', function (err, html) {
    // if (err) {
        // throw err; 
    // }       
    // http.createServer(function(request, response) {  
        // response.writeHeader(200, {"Content-Type": "html"});  
        // response.write(html);  
        // response.end();  
    // }).listen(8000);
// });



var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
console.log('request starting...');

var filePath = '.' + request.url;
if (filePath == './')
    filePath = './create.html';

var extname = path.extname(filePath);
var contentType = 'text/html';
switch (extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;      
    case '.jpg':
        contentType = 'image/jpg';
        break;
    case '.wav':
        contentType = 'audio/wav';
        break;
}

fs.readFile(filePath, function(error, content) {
    if (error) {
        if(error.code == 'ENOENT'){
            fs.readFile('./404.html', function(error, content) {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            });
        }
        else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            response.end(); 
        }
    }
    else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
    }
});

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');