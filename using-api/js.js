document.querySelector("button").addEventListener("click", () => {
    let personId = document.getElementById("personId").value;
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = function () {
        let response = xmlHttpRequest.response;
        let person = JSON.parse(response);
        displayPerson(person);
        getSpeciesandDisplayit(person.species);
    };
    xmlHttpRequest.open("GET", `https://swapi.co/api/people/${personId}/`);
    xmlHttpRequest.send();
});


function getSpeciesandDisplayit(url) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = function () {
        let response = xmlHttpRequest.response;
        let species = JSON.parse(response);
        document.getElementById("speciesname").innerHTML = species.name;
    }
    xmlHttpRequest.open("GET", url);
    xmlHttpRequest.send();
};


function displayPerson(person) {
    document.getElementById("h1").innerHTML = person.name;


    document.getElementById("personHeight").innerHTML = person.height;
    document.getElementById("personWeight").innerHTML = person.mass;
    document.getElementById("personEyeColor").innerHTML = person.eye_color;
    document.getElementById("personHairColor").innerHTML = person.hair_color;

}