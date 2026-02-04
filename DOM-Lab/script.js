// getElementById
let heading = document.getElementById("mainHeading");

// getElementsByClassName
let paragraph = document.getElementsByClassName("myParagraph");

// getElementsByTagName
let listItems = document.getElementsByTagName("li");

// querySelector
let button = document.querySelector("#myButton");

// querySelectorAll
let allLists = document.querySelectorAll(".myList li");

// Log everything
console.log("Heading:", heading);
console.log("Paragraph:", paragraph);
console.log("List Items:", listItems);
console.log("Button:", button);
console.log("All list items:", allLists);
// Selecting paragraph properly (first element because class gives collection)
let para = document.getElementsByClassName("myParagraph")[0];

// Change heading text using different methods

heading.innerText = "DOM Manipulation Started!";
heading.textContent = "Learning DOM with JavaScript!";
heading.innerHTML = "<span style='color:blue'>DOM is Powerful!</span>";

// Button click event
button.addEventListener("click", function() {

    // Append new text (not replace)
    para.textContent += " This text was added after clicking the button.";

    // Show length of paragraph
    let length = para.textContent.length;

    console.log("Paragraph length:", length);

    alert("Paragraph length: " + length);
});
