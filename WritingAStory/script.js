

let myButton = document.getElementById("myBtn");
let inputWho = document.getElementById("inputWho");
let inputWhen = document.getElementById("inputNumber");
let inputWhere = document.getElementById("inputWhere");
let result = document.getElementById("result");

function TheStory(who, where,when, element){
    element.innerHTML += `<p> There was a hero named ${who}. She lived in ${where} in the year of ${when} . She was the best hero indeed</p>`;
}
myButton.addEventListener("click", function(){
    TheStory(inputWho.value, inputWhere.value, inputWhen.value, result)
    inputWho.value = "";
    inputWhere.value = "";
    inputWhen.value = 0;
});

