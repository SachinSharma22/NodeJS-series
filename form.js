const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("HTML/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  else if (req.url === "/submit" && req.method === "POST") {
    let dataBody = [];

    req.on("data", (chunk) => {
      dataBody.push(chunk);
    });

    req.on("end", () => {
      const rawData = Buffer.concat(dataBody).toString();
      const readableData = querystring.parse(rawData);
      let dataString = "My name is "+readableData.name + " and my email id is "+readableData.email
      // fs.writeFileSync('text/' +readableData.name+".txt", dataString)
      // console.log(readableData);

      fs.writeFile("text/" + readableData.name + ".txt", dataString,(err)=> {
        if(err){
          res.end("Internal server error")
          return false
        }else{
          console.log("file created")
        }
      })

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Data Submitted</h1>");
      res.write(`<h3>Name: ${readableData.name}</h3>`);
      res.write(`<h3>Email: ${readableData.email}</h3>`);
      res.end();
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}).listen(3300, () => {
  console.log("Server running on http://localhost:3300");
});
