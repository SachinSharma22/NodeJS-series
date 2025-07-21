const http = require('http');
const userForm = require('./userForm')
const userDataSubmit = require('./userDataSubmit')
http.createServer((req,res)=> {
   
    if(req.url =="/"){
        userForm(req,res)
    }else if(req.url =="/submit"){
        userDataSubmit(req,res)
    }
    
 
}).listen(3200)