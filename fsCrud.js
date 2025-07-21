const fs = require('fs')

// fs.writeFileSync("files/apple.txt","This is a fruit")
// fs.unlinkSync("files/bananaapple.txt")
// fs.unlinkSync("files/banaapple.txt")
const data = fs.readFileSync("files/apple.txt","utf-8")
console.log(data)