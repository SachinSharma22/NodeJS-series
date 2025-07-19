const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    fs.readFile('HTML/web.html','utf-8',(err,data) => {
        if(err){
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.write("Internal Server Error")
            res.end();
            return
        }
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data);
        res.end();
    })
}).listen(3200)