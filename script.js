let grid = document.querySelector('.grid');
let input = document.querySelector('.input');
let blue = document.querySelector('.blue');
let reset = document.querySelector('.reset');
let erase = document.querySelector('.erase');
let rainbow = document.querySelector('.rainbow');
let gridDimensions = document.querySelector('.gridDimensions');
let color = document.querySelector('.color');


let gridSize = 10;
let length = 600 / gridSize;
let colourChoice = 'blue';
let mouse = false;
let currentSize = gridSize;
let mycolour = "";

document.body.onmousedown = () => {mouse = true};
document.body.onmouseup = () => {mouse = false};

erase.onclick = () => setColourChoice('erase');
blue.onclick = () => setColourChoice('blue');
rainbow.onclick = () => setColourChoice('rainbow');
reset.onclick = () => resetGrid();

input.addEventListener('input', function(e){
    gridSize = e.target.value;
    length = 600 / gridSize;
    currentSize = gridSize;
    gridDimensions.textContent = `${gridSize} x ${gridSize}`;
    clearGrid();
    createGrid(gridSize, length);
})

color.addEventListener('input', function(e){
    console.log(e.target.value);
    colourChoice = "mycolor";
    mycolour = e.target.value;
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
    else if(choice == 'rainbow'){
        selectButton('rainbow');
        colourChoice = 'rainbow';
    }
}

function selectButton(choice){
    if(colourChoice == 'blue'){
        blue.classList.remove('active');
    }
    else if(colourChoice == 'erase'){
        erase.classList.remove('active');
    }
    else if(colourChoice == 'rainbow'){
        rainbow.classList.remove('active');
    }

    if(choice == 'blue'){
        blue.classList.add('active');
    }
    else if(choice == 'erase'){
        erase.classList.add('active');
    }
    else if(choice == 'rainbow'){
        rainbow.classList.add('active');
    }
}


function createGrid(gridSize, length){
    for(let i = 0; i < gridSize*gridSize; i++){
        let content = document.createElement('div');
        content.classList.add('gridElement');
        content.style.backgroundColor = "#FFF5E4";
        content.style.boxSizing = "border-box";
        content.style.height = length + "px";
        content.style.width = length + "px";
        //content.style.border = "1px solid #850E35";

        content.addEventListener('mouseover', changeColor);
        grid.appendChild(content);
    }
}


function clearGrid(){
    grid.innerHTML = "";
}

function resetGrid(){
    clearGrid();
    createGrid(currentSize, 600/currentSize);
}

function changeColor(e){
    if(mouse && colourChoice == 'blue'){
        e.target.style.backgroundColor = "black";
    }
    else if(mouse && colourChoice == 'erase'){
        e.target.style.backgroundColor = "#FFF5E4";
    }
    else if(mouse && colourChoice == 'rainbow'){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${r}, ${g},${b})`;
    }
    else if(mouse && colourChoice == "mycolor"){
        e.target.style.backgroundColor = mycolour;
    }
}

window.onload = () => {
    createGrid(10, 60);
    gridDimensions.textContent = `${gridSize} x ${gridSize}`;
}



