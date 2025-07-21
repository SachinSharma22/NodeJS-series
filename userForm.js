function userForm(req,res) {
  res.writeHead(200, { "Content-Type": "text/html" }); 
    res.write(`<form action="/submit" method="post">
      <input type="text" placeholder="Enter name" name="name" /><br /><br />
      <input type="text" placeholder="Enter email" name="email" /><br /><br />
      <button>Submit</button>
    </form>`)
     res.end(); 
}
module.exports= userForm;