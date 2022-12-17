const displayBox = document.querySelector(".display");
const list = document.querySelectorAll(".show-display");
const calculate = document.querySelector(".calculate").addEventListener("click", cal);
const allclear = document.querySelector(".all-clear").addEventListener("click", aC);
const clear = document.querySelector(".clear-last").addEventListener("click", c);

list.forEach(item => {
    item.addEventListener("click", myFunction);
});

function myFunction(event){
    const x = event.target.innerHTML;
    if (displayBox.innerHTML == 0){
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function cal(){
    let result = displayBox.innerHTML;
    displayBox.innerHTML = eval(result);
};

function c(){
    let text = displayBox.innerHTML;
    if (text.length === 1){
        displayBox.innerHTML = 0;
    }else {
        displayBox.innerHTML = text.substring(0, text.length - 1);
    }
};

function aC(){
    displayBox.innerHTML = 0;
}