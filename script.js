const container = document.querySelector("#container");

//Add 16x16 grid if page is loaded
window.addEventListener("DOMContentLoaded", () => {
    for(let i = 0 ; i < 16 ; i++){
        for(let j = 0 ; j <16;j++){
            container.appendChild(document.createElement("div"));
        }
    }
});