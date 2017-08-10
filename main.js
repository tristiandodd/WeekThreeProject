let buttons = document.getElementById("buttons")
let row = document.getElementsByClassName("row")
let display = document.getElementById("display")
let rowbox = document.getElementsByClassName("rowbox")
let equal = document.getElementById("equal")
let sqrt = document.getElementById("sqrt")
let X = document.getElementById("X")
let mod = document.getElementById("mod")

display.innerHTML = [];
let displaytext = display.innerHTML

console.log(displaytext);

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function wow() {
  var wow = document.getElementById("wow");
  wow.play();
}

let equation = [];

function array() {

  for (var i = 0; i < row.length; i++) {
    equation.push(row[i].innerHTML)
  }
  console.log(equation)
  return equation
}
array(row)

let test = "";
const sum = eval(test)


for (var i = 0; i < row.length; i++) {
  let rowbutton = row[i]
  rowbutton.onclick = function() {
    wow();
    test += rowbutton.innerHTML
    for (var i = 0; i < test.length; i++) {
      if (test[i] === "C") {
        test = "";
      }
      equal.onclick = function() {
        display.innerHTML = eval(test);
        play();
      }
      sqrt.onclick = function() {
        display.innerHTML = Math.sqrt(parseInt(test));
      }
      mod.onclick = function() {
        test += "%"
        display.innerHTML = test
      }
      X.onclick = function() {
        test += "*"
        display.innerHTML = test
      }


    }


    display.textContent = test;
    console.log(test);
  }

}
