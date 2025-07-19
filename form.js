const http = require("http");
const fs = require("fs");
// http.createServer((req,res)=> {
//     res.writeHead(200,{"content-type":"text/html"})
//    if(req.url == '/'){
//      res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter name" name='name'><br><br>
//         <input type="text" placeholder="Enter email" name='email'><br><br>
//         <button>Submit</button>
//         </form>
//         `);
//    }
//    else if(req.url == '/submit'){
//     res.write('<h1>Data Submitted</h1>')
//    }
//     res.end()
// }).listen(3300)

http
  .createServer((req, res) => {
    fs.readFile("HTML/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        res.end();
        return
      }
      if (req.url == "/") {
         res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data);
        res.end();
      } else if (req.url == "/submit") {
        res.write("<h1>Data Submitted</h1>");
      }
        
    });
   
  })
  .listen(3300);
