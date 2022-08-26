const displayBox=document.querySelector(".display");
const list=document.querySelectorAll(".show-display");

function showDisplay(evnet){
    let x=evnet.target.innerText;
    if(displayBox.innerHTML==0){
        return displayBox.innerText=x;
    }
    return displayBox.innerText+=x;
}

function calculate(){
    let result=displayBox.innerText;
    displayBox.innerText=eval(result);
}

function clearAll(){
    displayBox.innerText=0;
}

function clear(){
    let text=displayBox.innerText;
    if(text.length===1){
        displayBox.innerText=0;
    }else if(text.length>1){
        displayBox.innerText=text.substring( 0, text.length -1)
    }
}

document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".all-clear").addEventListener("click", clearAll);
document.querySelector(".calculate").addEventListener("click", calculate);
list.forEach(item=>{
    item.addEventListener("click", showDisplay);
})