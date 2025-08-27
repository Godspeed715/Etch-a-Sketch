function deleteBoxes(){
    for (i=divs.length-1; i>=0; i--){
        divs[i].remove()
        divs.pop()
    }
}
function makeBoxes(num){
    for (i=0; i<num*num; i++){
        var div = document.createElement("div")
        container.appendChild(div)
        div.setAttribute("style", `width:${960/num -8}px; height:${960/num -8}px`)
        div.classList.toggle("div")
        divs.push(div)
    }
}
function addEvents(divs){
    divs.forEach(div =>{
    div.addEventListener("mouseenter", (e) =>{
        if (e.target.className !="div-hover"){
            div.classList.toggle("div")
            div.classList.toggle("div-hover")
        }
    })
})
}
function newGrid(divs){
    var input
    input = parseInt(prompt("Enter dimensions between 2 and 100"))
    if (input>=2 && input<=100){    
        deleteBoxes()
        makeBoxes(input)
        addEvents(divs)
    }
    else
        alert("Enter a dimension between 2 and 100.")
}

let num =16
let divs = []

const container = document.querySelector(".container")
const dimBtn = document.querySelector(".dim-btn")


makeBoxes(num)
addEvents(divs)

dimBtn.addEventListener("click", ()=>{newGrid(divs)})



