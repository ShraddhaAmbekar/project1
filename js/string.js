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

let v = "I am from Kolhapur, I love kolhapur."
console.log(v.length);
console.log(v.slice(10,18));//index
console.log(v.substring(10,18));//index
console.log(v.slice(-10,18));
console.log(v.substring(-10,18));
console.log(v.substr(10,17));// length
console.log(v.substr(-10,17));
console.log(v.replace("Kolhapur","Mumbai"));
console.log(v.replaceAll('Kolhapur','Mumbai'));
console.log(v.replace(/kolhapur/i,"Mumbai"));
console.log(v.replace(/kolhapur/ig,"Mumbai"));
console.log(v.replace(/Kolhapur/g,"Mumbai"));
console.log(v.toUpperCase());
console.log(v.toLowerCase());
let w = "I live in Kolhapur.";
let p= "    Kolhapur is famous city.   ";
k=v.concat(' ',w,' ',p);
console.log(k);
console.log('lwr->',v.toLowerCase(), 'upr->',v.toUpperCase());
console.log(p.trim());
console.log(p.trimStart());
console.log(p.trimEnd());

let q = 23452545;
console.log(q.toString());
console.log(toString(q));
console.log(v.charAt(15));//index
console.log(v.length);
console.log(v);
console.log(v.length);
console.log(v.charAt(40));
console.log(v.charAt(10));
console.log(v.includes("love"));

console.log(v.indexOf("love"));
console.log(v.indexOf("pune"));

console.log(v.charAt('love'));
console.log(v.charAt('l'));
console.log(v.charAt(24));
console.log(v.charAt(87));
console.log(v.match('love'));
console.log(v.match(/love/g));
console.log(v.matchAll('Kolhapur'));

let r = "21-02-2001";
console.log(r.split("-"));

let statusCode ="100256";
let a = statusCode.startsWith("100");
console.log(a)
console.log(statusCode.endsWith("568"));



