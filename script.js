const container = document.querySelector(".container")

const btn = document.querySelector(".size")
var userin1 = 20;
boxCreator()
btn.addEventListener("click",userinput)


function userinput(){
    var userin2 = prompt("Change size: ")
    userin1 = userin2;
    console.log(userin1)
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
    boxCreator()
}


function boxCreator(){
    var counter = 1;
    while(counter <= (userin1*userin1)){
        console.log(userin1)
        const div = document.createElement("div")
        div.setAttribute("id", `box${counter}`)
        div.classList.add("box")
        var dims = 625/userin1;
        div.style.width = `${dims}px`;
        div.style.height = `${dims}px`;
        div.style.backgroundColor = "white";
        
        // div.style.border = "1px solid white"
        
        container.appendChild(div)
        counter++;
    
    }
}

function randomColor(){
    var code1 = Math.random()*255
    var code2 = Math.random()*255
    var code3 = Math.random()*255
    var color = `rgb(${code1},${code2},${code3})`
    return color;

}

const rainbow = document.querySelector(".rainbow")
const normalcolor = document.querySelector(".normalColor")
const eraser = document.querySelector(".erase")
rainbow.addEventListener("click",()=>{

    container.addEventListener("mouseover",(e)=>{
        (e.target).style.backgroundColor = randomColor();
    })
})

normalcolor.addEventListener("click",()=>{
    var colordetect = document.querySelector("#favcolor").value;
    container.addEventListener("mouseover",(e)=>{
        (e.target).style.backgroundColor = `${colordetect}`;
    })
})
eraser.addEventListener("click",()=>{

    container.addEventListener("mouseover",(e)=>{
        (e.target).style.backgroundColor = "white";
    })
})
