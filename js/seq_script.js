
function starting (){
    gaming()
    document.querySelector(".startsq").removeEventListener("click",starting)
    document.querySelector(".startsq").style.display = "none"

}

document.querySelector(".startsq").addEventListener("click",starting)

clicking()

let random = [];
let indexes = []
let playerC = []


 let length;
function randomIndex (){
    let randomnum = Math.round(Math.random()*9)
    random.push(document.querySelector(`.gam[data-index="${randomnum}"]`))
    indexes.push(randomnum)
}

function glare (){
  random.forEach((element,index) =>{
    setTimeout(()=>{ element.style.backgroundColor = "white"
        document.querySelector("#click").play()
        setTimeout(()=>{ element.style.backgroundColor = 'rgb(26, 25, 25)'}, 150)}
        , index*450)
  })
}










function gaming (){
    playerC = [];
    randomIndex()
    glare()

}

document.querySelectorAll(".gam").forEach((element)=>{

    element.addEventListener("click",()=>{
        element.style.backgroundColor = "white"
        document.querySelector("#click").play()
        setTimeout(()=>{ element.style.backgroundColor = 'rgb(26, 25, 25)'}, 150)

    })
    
}
)

function clicking(){

  document.querySelectorAll(".gam").forEach((element)=>{
    element.addEventListener("click", (event)=>{
     playerC.push(parseInt(event.currentTarget.dataset.index))
     comparing()
    })
  })

  

} 

function comparing(){
      length = playerC.length - 1

    if(playerC[length] === indexes[length]){
        if(playerC.length === indexes.length){
            setTimeout(() => {
                gaming()
            }, 1000); 
        }
        
    } else {
        end()
    }
}

function end (){
    document.querySelector(".end").style.display = "flex"
    document.querySelector(".qwe").style.display = "none"
}

document.querySelector(".end").addEventListener("click",()=>{
    location.reload()
})