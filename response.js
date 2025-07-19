const http = require('http');
http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html")
    res.write("<h2>Hello Sachin Sharma</h2>")
    res.end("sachin sharma")
}).listen(4800)