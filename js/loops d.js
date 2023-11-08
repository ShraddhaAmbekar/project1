for (let i = 0; i <= 10; i++) {
    const element = (i)
    console.log(element);
    console.log(i==element);
}
for (let i = 10; i >= 0; i--) {
    const element = (i)
    console.log(element);
}

let week =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
for (let i = 0; i < week.length; i++) {
    console.log(week[i]);
}

for (let i = 0; i <10; i++) {
    if(i===3){
        continue;
    }
    console.log(i);
}

for (let i = 0; i <10; i++) {
    if(i==3){
        break;
    }
    console.log(i);
}
let person={
    fname:'shweta',
    lName:"patil",
    age:24,
    city:'Pune',
}
for (let x in person) {
  console.log(person[x]);}


   let student = {
    name:'pooja', 
    age : 20,
    city:'pune'
}

//for in loop - it is used to itrate objects (ES1 version's feature)
for(let x in student){
    console.log(student[x]);   //[]property access symbol [x]
}
let fruits=['apple','orange','guava','pinapple','banana']
//for of loop
for(let one of fruits){
    console.log(one);
}
let a=1
do {
    console.log("answer is "+a);
    a++
} 
while (a<=5);{
console.log("Value is greater than 5");
}
