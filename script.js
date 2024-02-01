const container = document.querySelector("#container");

//Add 16x16 grid if page is loaded
window.addEventListener("DOMContentLoaded", updateGrid(16));

//Add a "trail" like effect, whenever a div is hovered by mouse, the background color will change
container.addEventListener("mouseenter", () => {
    const div = container.childNodes;

    div.forEach((currentDiv) => {
        currentDiv.addEventListener("mouseenter", () => {
            currentDiv.classList.add("hovered");
        })
    })
})

//Asked the user to input a new grid value
const addGrid = document.querySelector("#grid");

addGrid.addEventListener("click", () => {
    deleteGrid();
    updateGrid(prompt("Input how big the grid is gonna be : "));
})

//Function to update grid
function updateGrid(value) {
    for(let i = 0 ; i < value ; i++){
        for(let j = 0 ; j < value ; j++){
            container.appendChild(document.createElement("div"));
        }
    }
    
    const divs = container.children;
    for(let i = 0 ; i < divs.length ; i ++) {
        divs[i].style.minWidth = 100/value + "%";
        divs[i].style.minHeight = 100/value + "%";
    }
}

//Function to delete grid
function deleteGrid() {
    container.innerHTML = "";
}