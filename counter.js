const inputFiled = document.querySelector(".input");
const IncrementBtn = document.querySelector(".Increment")
const DecrementBtn = document.querySelector(".Decrement")
const ResetBtn = document.querySelector(".Reset");



inputFiled.value = 0

IncrementBtn.addEventListener('click', () =>{

 inputFiled.value = Number(inputFiled.value) + 1;

if(Number(inputFiled.value) >= 10){
  alert("You have Reached Maximum value")
  IncrementBtn.disabled = true;
 
}

DecrementBtn.disabled = false;
  ResetBtn.disabled = false;

})


DecrementBtn.addEventListener("click", () =>{

  if(Number(inputFiled.value > 0)){
    inputFiled.value = Number(inputFiled.value) - 1;
  }
  
  if(Number(inputFiled.value) <= 0){
   alert("You have Reached Maximum value")
  DecrementBtn.disabled = true;
 }

 IncrementBtn.disabled = false;
  
})
  

ResetBtn.addEventListener('click', () =>{
  inputFiled.value = 0;

    DecrementBtn.disabled = true;
  ResetBtn.disabled = true;
})