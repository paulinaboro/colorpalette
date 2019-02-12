// ---------------COLOR PALETTE TIPS ----------------

// Create a function colorPick(event)
// Function setBaseColor- this function should also set the other colors
// Function calculateColors (base)- this function should calculate matching colors and match 4 of them(through different methods).
// Comment: we have to figure out how to represent the colors.
// 1.we could have an object of {r, g, b}
// 2.we could have an object of {h, s ,l}

// ---------function picks the color--------------

function colorPick(value) {
  let colorPick = "";
  let chosenColor = document.getElementById("myColor").value;
  document.getElementById("demo").innerHTML = chosenColor;
  return chosenColor;
}
function setBackgroundColor(){
  document.querySelector(chosenColor).setAttribute("style","background-color:`$colorPick}"
!important"`);
}
document.getElementById("selected").innerHTML = setBackgroundColor(chosenColor);


// ---------function sets the picked/base color--------------
function setBaseColor() {}

colorPick();
setBaseColor();

//-----------function calculate 4 matching colors----------------
// function calculateMatchingColors() {}

// let baseColor = document.getElementById(chosenColor).value;
//   document.querySelector.(".selected").setAttribute("style",
//     "background-color:`${colorPick} !important"`);
