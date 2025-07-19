const http = require('http');
http.createServer((req,res) => {
    const name = process.argv[2]
    const age = process.argv[3]
    console.log(`Hello ${name} you are now ${age} year old.`)
    res.end();
}).listen(4400)