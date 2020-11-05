
let viewer = document.getElementById("viewer");
let equals = document.getElementById("equals");
let nums = document.getElementsByClassName("num");
let opr = document.getElementsByClassName("opr");
let theNum = '';
let oldNum = '';
let resultNum;
let operator;


let setNum = function () {
  if (resultNum) {
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else {
    theNum += this.getAttribute("data-num");
  }

  viewer.innerHTML = theNum;

};

let moveNum = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.getAttribute("data-opr");
  equals.setAttribute("data-result", "");
};

let displayNum = function () {

  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  switch (operator) {
    case "plus":
      resultNum = oldNum + theNum;
      break;

    case "minus":
      resultNum = oldNum - theNum;
      break;

    case "multiple":
      resultNum = oldNum * theNum;
      break;

    case "divide":
      resultNum = oldNum / theNum;
      break;

    default:
      resultNum = theNum;
  }


  viewer.innerHTML = resultNum;
  equals.setAttribute("data-result", resultNum);

  oldNum = 0;
  theNum = resultNum;

};

let clearAll = function () {
  oldNum = "";
  theNum = "";
  viewer.innerHTML = "0";
  equals.setAttribute("data-result", resultNum);
};

for (let i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = setNum;
}

for (let i = 0, l = opr.length; i < l; i++) {
  opr[i].onclick = moveNum;
}

let eee = equals.onclick = displayNum;

let evennt = document.querySelector("#clear").onclick = clearAll;

let event = document.querySelector("#reset").onclick = function () {
  window.location = window.location;
};

