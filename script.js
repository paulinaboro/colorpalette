// ---------------COLOR PALETTE TIPS ----------------

// Create a function colorPick(event)
// Function setBaseColor- this function should also set the other colors
// Function calculateColors (base)- this function should calculate matching colors and match 4 of them(through different methods).
// Comment: we have to figure out how to represent the colors.
// 1.we could have an object of {r, g, b}
// 2.we could have an object of {h, s ,l}

// function colorPick() {}

// function setBaseColor() {}

// function calculateColors() {}

let head = document.querySelector("#head");

let selectedColor = document.querySelector(".color1");

// background color w color1 will be = to input- head id
color1.style.backgroundColor = head.value;

head.addEventListener("input", function(pickedColor) {
  color1.style.backgroundColor = pickedColor.target.value;
});
