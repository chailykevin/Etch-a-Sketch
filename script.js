const container = document.querySelector("#container");

//Add 16x16 grid if page is loaded
window.addEventListener("DOMContentLoaded", updateGrid(16));

//Add hovered effect. If a div is hovered, the background color will change
container.addEventListener("mouseenter", () => {
    const div = container.childNodes;

    div.forEach((currentDiv) => {
        currentDiv.addEventListener("mouseenter", () => {
            currentDiv.classList.add("hovered");
        })
    })

    div.forEach((currentDiv) => {
        currentDiv.addEventListener("mouseleave", () => {
            currentDiv.classList.remove("hovered");
        })
    })

    div.forEach((currentDiv) => {
        currentDiv.addEventListener("mousedown", () => {
            currentDiv.classList.add("clicked");
        })
    })
})

//Add click event listener, whenever a div is clicked, it will change it's background color.


//Asked the user to input a new grid value
const addGrid = document.querySelector("#grid");

addGrid.addEventListener("click", () => {
    const value = prompt("Input how big the grid is gonna be : (Range 1 - 100)");
    if(value <= 0 || value > 100) {
        alert("Invalid value")
    } else {
        deleteGrid();
        updateGrid(value);
        //To keep the grid on/off based on the previous condition
        if(showGridButton.id == "X"){
            div.forEach((div) => {
                div.classList.add("showGrid");
            })
        } else {
            div.forEach((div) => {
                div.classList.remove("showGrid");
                showGridButton.id = "Y";
            })
        }
    }
    
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

//Event listener to show grid
const showGridButton = document.querySelector(".showGridButton");
const div = container.childNodes;

showGridButton.addEventListener("click", () => {
    if(showGridButton.id == "Y"){
        div.forEach((div) => {
            div.classList.add("showGrid");
            showGridButton.id = "X";
        })
    } else {
        div.forEach((div) => {
            div.classList.remove("showGrid");
            showGridButton.id = "Y";
        })
    }
})