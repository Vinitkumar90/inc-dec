let increase = document.querySelector("#incBtn");
let reset = document.querySelector("#resBtn");
let decrease = document.querySelector("#decBtn");
let number = document.querySelector("#display");

let count = 0;

increase.addEventListener("click", function () {
  count++;
  number.textContent = count;
  updatecolor()
});

decrease.addEventListener("click", function () {
  count--;
  number.textContent = count;
  updatecolor()
});

reset.addEventListener("click", function () {
  count=0;
  number.textContent = count;
  updatecolor()
});


function updatecolor(){
    if(count>0){
        number.style.color = "#32CD32"
    }else if(count<0){
        number.style.color = "#FF0000"
    }else{
        number.style.color = "black";
    }
}