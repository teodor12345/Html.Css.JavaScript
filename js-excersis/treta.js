// treta vezba

let Divlast = document.getElementsByTagName("body")[0].lastElementChild;
let headerThree = Divlast.getElementsByTagName("h3")[0];
let headerOne = headerThree.previousElementSibling;
let changetext = headerOne.innerHTML = "Changge header one";
console.log(changetext);
let changeText = headerThree.innerHTML = "Change header two";
console.log(changeText);
let divFirst = document.getElementById("first");
let headerhOne = divFirst.getElementsByTagName("h1")[0];
let changeeText = headerhOne.innerHTML = "Change first header";
console.log(changeeText);
let par = document.getElementsByTagName("p")[0];
let change = par.innerHTML = "Next change";
console.log(change);
let pars = document.getElementsByTagName("p")[1];
let changes = pars.innerHTML = "Next change";
console.log(change);
let pare = document.getElementsByTagName("text")[0];
let changed = pare.innerHTML = "Next change";
console.log(changed);