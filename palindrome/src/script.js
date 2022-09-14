const txtInput = document.querySelector(".inputs input");
const btn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info")
let filterInput;

btn.addEventListener("click",()=>{
    // splitting user input character ,reversing them,
    // and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        window.navigator.vibrate(1000);
        return infoTxt.innerHTML = `no, <span>'${filterInput}'</span> isn't  a palindrome`
    }
        infoTxt.innerHTML = `yes, <span>'${filterInput}'</span> is a palindrome`
})
txtInput.addEventListener("keyup",()=>{
    // removing spaces & all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
       return btn.classList.add("active")
    }
        infoTxt.style.display = "none";
        btn.classList.remove("active")
})