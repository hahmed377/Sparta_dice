var square = document.getElementsByClassName("innerSquare");
console.log(square);

document.getElementById("refreshButton").addEventListener("click", numrandom);

function numrandom() {
for (var i = 0; i < square.length; i++) {
  square[i].className = "innerSquare";
}
  var randomNum = (Math.floor(Math.random() * 6) + 1);
  selectedDice(randomNum);
}

function selectedDice(number) {

switch (number) {
  case 1:
  square[4].className = "innerSquare dot";

  break;
  case 2:
  square[0].className = "innerSquare dot";
  square[8].className = "innerSquare dot";
  break;
  case 3:
  square[2].className = "innerSquare dot";
  square[4].className = "innerSquare dot";
  square[6].className = "innerSquare dot";

  break;
  case 4:
  square[0].className = "innerSquare dot";
  square[2].className = "innerSquare dot";
  square[6].className = "innerSquare dot";
  square[8].className = "innerSquare dot";

  break;
  case 5:
  square[0].className = "innerSquare dot";
  square[2].className = "innerSquare dot";
  square[4].className = "innerSquare dot";
  square[6].className = "innerSquare dot";
  square[8].className = "innerSquare dot";

  break;
  case 6:
  square[0].className = "innerSquare dot";
  square[2].className = "innerSquare dot";
  square[3].className = "innerSquare dot";
  square[5].className = "innerSquare dot";
  square[6].className = "innerSquare dot";
  square[8].className = "innerSquare dot";
  default:

}


}
