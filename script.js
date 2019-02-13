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

let colorPicker = document.querySelector("#colorPicker");

let box1 = document.querySelector(".color1");

let hex_color = document.querySelector(".hex_color");

let baseColor, baseColorRGB, baseColorHSL;

// background color w color1 will be = to input- head id
// color1.style.backgroundColor = head.value;

colorPicker.addEventListener("input", colorPick);

function colorPick() {
  console.log(colorPicker.value);
  baseColor = colorPicker.value;
  setBaseColor();
}

function setBaseColor() {
  box1.style.background = baseColor;
  calculateColors();
}

function calculateColors() {
  baseColorRGB = hexToRgb(baseColor);
  baseColorHSL = rgbToHsl(baseColorRGB.r, baseColorRGB.g, baseColorRGB.b);
  console.log(baseColorRGB, baseColorHSL);
}

function analog() {}
// This is a Stackoverflow function
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}
