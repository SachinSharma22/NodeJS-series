const http = require('http');
http.createServer((req,res) => {
    res.write("<h1>Sachin's Server </h1>")
    res.end("Hello")
}).listen(4800);