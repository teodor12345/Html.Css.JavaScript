// vtora vezba




function weightInChicken(weight) {
    return weight / 0.5;
}

let rediv = document.getElementById("result");
let input = parseInt(prompt("Please enter your weight:"));
if (!isNaN(input)) {
    rediv.innerHTML = `<p> ${input}KG is ${weightInChicken(input)}></p>`
} else {
    rediv.innerHTML = `<h3> Wrong input, try again </h3>`
}