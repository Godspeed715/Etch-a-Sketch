const container = document.querySelector(".container")
let divs = []
for (i=0; i<16*16; i++){
    var div = document.createElement("div")
    container.appendChild(div)
    div.classList.toggle("div")
    divs.push(div)
}

divs.forEach(div =>{
    div.addEventListener("mouseenter", (e) =>{
        if (e.target.className !="div-hover"){
            div.classList.toggle("div")
            div.classList.toggle("div-hover")
        }
        
        
    })
})
console.log(container.className)

// input = prompt()



