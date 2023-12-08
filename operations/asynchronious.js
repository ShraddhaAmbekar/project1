const file =require('fs')//we can use fs 

file.writeFile("file4.txt" , "hii", ()=>{
  console.log("this is console")
});
r = file.readFile("file4.txt","utf-8", ()=>{
  console.log("console")
})
console.log(r)
