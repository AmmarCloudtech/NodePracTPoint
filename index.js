var http = require("http");
http.createServer(function (request, responce) {
	// Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    responce.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    responce.end("Hello, World!\n"); 
}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/');

