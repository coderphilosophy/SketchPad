let num = 3;
let length = 500 / num;
console.log(length);
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');

for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
        const content = document.createElement('div');
        content.classList.add('gridElement');
        content.style.backgroundColor = "black";
        content.style.boxSizing = "border-box";
        content.style.height = length + "px";
        content.style.width = length + "px";
        console.log(length);
        content.style.border = "2px solid red";
        
        grid.appendChild(content);
        
    }
}


const gridElement = document.querySelectorAll('.gridElement');
console.log(gridElement[1]);

let mouse = false;
grid.addEventListener('mousedown', () => {
    mouse = true;
})
grid.addEventListener('mouseup', () => {
    mouse = false;
})


gridElement.forEach((element) => {
    element.addEventListener('mousemove', () => {
        if(mouse){
            element.style.backgroundColor = "blue";
            console.log("mouse is pressed")
        }
    })
})

reset.addEventListener('click', resetGrid);

function resetGrid(){
    gridElement.forEach((element) => {
        element.style.backgroundColor = "black";
    })
    mouse = false;
}







