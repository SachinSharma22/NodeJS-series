const http = require('http')

 const usersData = [
       {
         name:'sachin',
         age:23,
         email:"sachin@gmail.com"
       },
       {
         name:'saurabh',
         age:21,
         email:"saurabh@gmail.com"
       },
       {
         name:'pawan',
         age:13,
         email:"pawan@gmail.com"
       },

    ]
http.createServer((req,res) => {
    res.setHeader("Content-Type","application/json")
   res.write(JSON.stringify(usersData));
   res.end();
}).listen(4000)