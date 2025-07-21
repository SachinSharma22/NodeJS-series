const querystring = require("querystring");
function userDataSubmit(req,res) {
    if(req.url == "/submit" && req.method == "POST"){
        const urlData = [];
        req.on("data",(chunk)=> {
            urlData.push(chunk);
        })
        req.on("end",() => {
            const rawData = Buffer.concat(urlData).toString()
            const readableData = querystring.parse(rawData)
             
            res.writeHead(200,{"Content-Type":"text/html"})
             res.write(`<h1>Data Submitted Successful</h1>`)
             res.write(`<h1>Name: ${readableData.name}</h1>`)
             res.write(`<h1>Email: ${readableData.email}</h1>`)
             res.end()
        })
        
    }else{
         res.writeHead(404,{"Content-Type":"text/html"})
         res.write(`<h1>404 - Page Not Found</h1>`)
         res.end()
    }
    
   
}
module.exports= userDataSubmit;