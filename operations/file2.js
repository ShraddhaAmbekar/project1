const { log } = require("console")
const fs= require("fs")
fs.writeFileSync("write.txt","I am from india.")
//fs.writeFile("write.txt","I am from india.")
r=fs.readFileSync("write.txt" ,"utf8")
console.log(r);
