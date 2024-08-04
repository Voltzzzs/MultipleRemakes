const seq = document.querySelector(".sq")
const pag1 = document.querySelector(".pag01")
const returnButton = document.querySelector(".return")
const button = document.querySelector(".button")

button.addEventListener("click",()=>{
    pag1.style.display = "none"
    document.querySelector(".sequencePage").style.display = "flex"
    returnButton.style.display = "flex"
})

seq.addEventListener("click", ()=>{
    pag1.style.display = "none"
    returnButton.style.display = "flex"
})

returnButton.addEventListener("click",()=>{
    pag1.style.display = "flex"
    returnButton.style.display = "none"
})