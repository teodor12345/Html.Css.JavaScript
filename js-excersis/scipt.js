
// prva vezba

let firstDiv = document.querySelector("div");
let allParagraphs = document.getElementsByTagName("p");
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
console.log(firstDiv);
console.log(allParagraphs);
console.log(lastDiv);
let header3 = lastDiv.getElementsByTagName("h3")[0];
console.log(header3);
let header1 = header3.previousElementSibling;
console.log(header1);
let getText = document.getElementsByClassName("second")[0].innerHTML;
console.log(getText);
let add = document.querySelector("text");
add.innerHTML += "text";
let changetext = header1.innerHTML = "And i know";
console.log(changetext);
let changeText = header3.innerHTML = "Change is gonna come";
console.log(changeText);




































