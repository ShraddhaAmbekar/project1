prompt('what is your address?')


//for buttonA
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  //alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};


//for B
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  alert(`Hello ${prompt("What is your strength?")}, nice to see you!`);
  headingB.textContent = `Welcome ${prompt("Which is your favorite city?")}`;
};



