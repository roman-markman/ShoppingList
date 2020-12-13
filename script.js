var userInput = document.getElementById("user_input");
var submitButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var delete_item = document.querySelectorAll(".delete");

//Check if the input field is empty
function inputLength() {
    return userInput.value.length;
}

//Create a new li item and adds it to the list
//Adds a click event listener and hover event to each element of li
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value + " "));
    hoverEffects(li);
    AddDeleteButton(li)
    li.addEventListener("click", function() {
        toggleOnOff(li);
    });
    ul.appendChild(li);
    userInput.value = "";
}

//Create an element with the name in the field
function addListAfterClick() {
    if(inputLength() > 0 ) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Create event listener for each original li item
//Change text when hover
function addListener() {
    var list = document.querySelectorAll("li");
    for (const item of list) {
        hoverEffects(item);
        item.addEventListener("click", function() {
            toggleOnOff(item);
        });
        AddDeleteButton(item);
    }
}

//Add hover effect when mouse enters into the list item area
function hoverEffects(item) {
    item.addEventListener("mouseenter", function(event) {
        event.target.style.cursor = "pointer";
    })
}

//Add a Delete button to each li item
function AddDeleteButton(parent) {
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    button.setAttribute("class", "delete center");
    //button.se
    button.addEventListener("click", function(event) {
        button.parentElement.remove();
    })
    parent.appendChild(button);
}

function toggleOnOff(item) {
    item.classList.toggle("done");
    item.classList.toggle("bold");
}

submitButton.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeyPress);
addListener();