let calculation = localStorage.getItem('calculation') || ''
displayCalculation();

function updateCalculation(value){
  calculation += value;        
  console.log(calculation);
  localStorage.setItem('calculation' , calculation);
  displayCalculation()
};

function saveCalculation(){
  localStorage.setItem('calculation' , calculation);
};

function displayCalculation(){
  document.querySelector('.js-calculation').innerHTML=calculation
};
