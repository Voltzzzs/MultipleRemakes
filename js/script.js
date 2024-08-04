const seq = document.querySelector(".sq")
const pag1 = document.querySelector(".pag01")
const returnButton = document.querySelector("#return")


seq.addEventListener("click", ()=>{
    pag1.style.display = "none"
    returnButton.style.display = "flex"
})

returnButton.addEventListener("click",()=>{
    pag1.style.display = "flex"
    returnButton.style.display = "none"
})