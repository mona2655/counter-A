const inputFiled = document.querySelector(".input");
const IncrementBtn = document.querySelector(".Increment")
const DecrementBtn = document.querySelector(".Decrement")
const ResetBtn = document.querySelector(".Reset");
const toggleBtn = document.querySelector(".theme-toggle")
const body = document.body;



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

toggleBtn.addEventListener("click", () =>{
  body.classList.toggle("dark-mode")
  if(body.classList.contains("dark-mode")){
    toggleBtn.innerHTML = "Light-Mode"
  }else{
    toggleBtn.innerHTML = "Dark-Mode"
  }
})