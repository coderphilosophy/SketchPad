/*let grid = document.querySelector('.grid');
let reset = document.querySelector('.reset');
let input = document.querySelector('.input');
let erase = document.querySelector('.erase');
let gridElement;

let num = 10;
let length = 500 / num;
createGrid(num, length)

input.addEventListener('input', function(e){
    num = e.target.value;
    length = 500 / num;
    clearGrid();
    createGrid(num, length);
})

function createGrid(num, length){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const content = document.createElement('div');
            content.classList.add('gridElement');
            content.style.backgroundColor = "black";
            content.style.boxSizing = "border-box";
            content.style.height = length + "px";
            content.style.width = length + "px";
            content.style.border = "1px solid red";
            content.addEventListener('mouseover', changeColor);
            grid.appendChild(content);
            
        }
    }
    gridElement =  document.querySelectorAll('.gridElement');
    grid = document.querySelector('.grid');
    console.log(gridElement[1]);
}

function clearGrid(){
    grid.innerHTML = "";
}

let mouse = false;
document.body.onmousedown = () => {mouse = true};
document.body.onmouseup = () => {mouse = false};

function changeColor(e){
    console.log(e);
    if(mouse){
        e.target.style.backgroundColor = "blue";
    }
}

/*
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
*/


let grid = document.querySelector('.grid');
let input = document.querySelector('.input');
let blue = document.querySelector('.blue');
let reset = document.querySelector('.reset');
let erase = document.querySelector('.erase');


let gridSize = 10;
let length = 500 / gridSize;
let colourChoice = 'blue';
let mouse = false;

document.body.onmousedown = () => {mouse = true};
document.body.onmouseup = () => {mouse = false};

erase.onclick = () => setColourChoice('erase');
blue.onclick = () => setColourChoice('blue');

input.addEventListener('input', function(e){
    num = e.target.value;
    length = 500 / num;
    clearGrid();
    createGrid(num, length);
})

function setColourChoice(choice){
    if(choice == 'erase'){
        selectButton('erase');
        colourChoice = 'erase';
    }
    else if(choice == 'blue'){
        selectButton('blue');
        colourChoice = 'blue';
    }
}

function selectButton(choice){
    if(colourChoice == 'blue'){
        blue.classList.remove('active');
    }
    else if(colourChoice == 'erase'){
        erase.classList.remove('active');
    }

    if(choice == 'blue'){
        blue.classList.add('active');
    }
    else if(choice == 'erase'){
        erase.classList.add('active');
    }
}


function createGrid(gridSize, length){
    for(let i = 0; i < gridSize*gridSize; i++){
        let content = document.createElement('div');
        content.classList.add('gridElement');
        content.style.backgroundColor = "black";
        content.style.boxSizing = "border-box";
        content.style.height = length + "px";
        content.style.width = length + "px";
        content.style.border = "1px solid red";

        content.addEventListener('mouseover', changeColor);
        grid.appendChild(content);
    }
}


function clearGrid(){
    grid.innerHTML = "";
}

function changeColor(e){
    if(mouse && colourChoice == 'blue'){
        e.target.style.backgroundColor = "blue";
    }
    if(mouse && colourChoice == 'erase'){
        e.target.style.backgroundColor = "black";
    }
}

window.onload = () => {
    createGrid(10, 50);
}



