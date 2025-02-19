const movieList = document.querySelector(".theUL")
const inputBox = document.querySelector("#inputBox")
let elements = document.querySelectorAll(".delete");
const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector("#clear-button");


const removeMovie = (element) => {
    element.closest("li").remove();  
};

const refresh = () => {
    elements = document.querySelectorAll(".delete");
    elements.forEach((element) => {
        element.addEventListener("click", () => { 
            removeMovie(element); 
        });
    });
}

const clear = () => {
    elements.forEach((element) => {
        removeMovie(element);
    })
    refresh();
}
refresh();

console.log(elements);

const addMovie = () => {
    const movieName = inputBox.value;
    if(movieName == "") return;
    console.log(movieName);
    let newButton = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    newButton.textContent = movieName;
    deleteButton.textContent = "Delete"
    newButton.appendChild(deleteButton);
    movieList.appendChild(newButton);
    refresh();
}

addButton.addEventListener("click", addMovie)
clearButton.addEventListener("click", clear)

