// ----------EXAMPLE 2------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "yellow";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
// document.body.prepend(newListItem);
//  document.getElementById("fruits").append(coconut);
document.getElementById("fruits").prepend(coconut);

// const apple = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem,banana);

// const listItems = document.querySelectorAll("#fruits li")
// document.getElementById("fruits").insertBefore(newListItem,listItems[3]);
// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItem);
