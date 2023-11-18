const todoList = [];

function addTodo() {
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;
    console.log(name);


todoList.push(name);
console.log(todoList);
inputElement.value = '';
};

//while loop
let i=1;
while(i<=5){
    console.log(i);
   // i = i+1;
    i++
}

//for loop
for(let i=1; i<=5; i++){
    console.log(i);
}
//while vs For loop
//Standard loop =>for
//non sandard loop => while
let randomNumber =0;
while (randomNumber < 0.5){
    randomNumber =Math.random();
    console.log(randomNumber);}
for (let i=Math.random(); i<0.5; i++){
    console.log(i);
}

