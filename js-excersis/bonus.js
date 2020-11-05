// // bonus vezba

let opps = document.getElementById("bonus");
let titleDivs = opps.firstElementChild;
let contentDivs = opps.children[1];

let recepies = ["dessert"];
let ingridentsCount = ["4"];
let allIngridients = ["sugar","milk","flour","vanilla"];

function printAlling(allIngridients,ingridentsCount,element){
console.log(element);
     element="";
    element.innerHTML = "";
    element.innerHTML += "<ol>";
    for(let i=0; i < allIngridients.length; i++){
        element.innerHTML += `<li>${allIngridients[i]} : ${ingridentsCount}</li>`;
    }
    element.innerHTML += "</ol>"
}

function printrecepie(recepies, element){
    element = "";
    element.innerHTML = ""; 
    element.innerHTML += "<ol>";
    for(let recepie of recepies){
        element.innerHTML += `<h1>${recepie}</h1>`;
    }
    element.innerHTML += "</ol>"
}


function endresult (receppie, ingredient){
    if(receppie === "recepie"){ 
      titleDivs.innerHTML += "<h1><b>Hello, this is dessert-macarone</b></h1>";
      titleDivs.innerHTML += "<p>Welcome out recepies page</p>";
      contentDivs.innerHTML += "<h3>Your ingrdiants</h3>"
      console.log(contentDiv);
      printAlling(allIngridients, contentDivs);
    } else {
      titleDivs.innerHTML += "<h1><b>Your input was unsucessfull</b></h1>";
      titleDivs.innerHTML += "<p>Please try again!</p>";
    }
  }


let input=prompt("what's the name of the recepie");
let receppie=prompt("how many ingridents does it need");
// let ingredient=prompt("Name of every ingrident");
endresult(input,receppie);



// function recepies(ingrdiants) {
//     return ingrdiants ;
// }

// let rediv = document.getElementById("content");
// let input = parseInt(prompt("Please enter recepie:"));
// if (!isNaN(input)) {
//     rediv.innerHTML = `<p> ${input} is ${recepies(input)}></p>`
// } else {
//     rediv.innerHTML = `<h3> Wrong input, try again </h3>`
// }


// console.log(recepies("dessert"));



