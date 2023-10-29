let string = "Hello Shraddha";
let s = string.length;

console.log(s);
 
console.log(string.slice(6));
console.log(string.slice(0,5));
console.log(string.substring(0,5));
console.log(string.substr(0,5));
let string2=string.replace("Hello","Namaste")
console.log(string2);

let string3="I live in Kolhapur,I love Kolhapur,and you must see all Kolhapur"
console.log(string3.replaceAll("Kolhapur","Pune"));
console.log(string3.replaceAll("kolhapur","Pune"));
console.log(string3.replace(/kolhapur/i,"Pune"));
console.log(string3.replace(/kolhapur/ig,"Pune"));
console.log(string3.replaceAll("Kolhapur","Pune"));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.concat(" "+string2));

let string4="   Hello   Hii    ";
console.log(string4.trim());
console.log(string4.trimEnd());
console.log(string4.trimStart());
text='13';
console.log(text.padStart(15,'ak'));
console.log(text.padEnd(15,'ak'));
console.log(string.charAt(4));
console.log(string.charCodeAt(4));
console.log(string.split(""));
console.log(string3.indexOf("love"));
console.log(string3.indexOf("love",7));
let index = string3.search(/you/);
console.log(index);
console.log(string3.indexOf("you"));

let string5 = "I love cats. Cats are very easy to love. Cats are very popular."
//let iterator = string5.match("Cats");
console.log(string5.match("Cats"));
console.log(string5.matchAll("Cats"));
console.log(string5.includes("love"));
console.log(string5.startsWith("love"))
console.log(string5.endsWith("popular."))

console.log(`${string4}, ${string5}`);
// console.log(/\s+/g)
// string
console.log(string5.substring(4,8));



