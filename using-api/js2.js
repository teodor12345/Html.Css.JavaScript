document.querySelector("button").addEventListener("click", () => {
    let personId = document.getElementById("personId").value;
    callApi(`https://swapi.co/api/people/${personId}/`, (person) => {
        displayPerson(person);
        callApi(person.species, (species) => document.getElementById("speciesname").innerHTML = species.name);
    });
});

function callApi(url, callback) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = function () {
        let response = xmlHttpRequest.response;
        let dataParse = JSON.parse(response);
        callback(dataParse);
    }
    xmlHttpRequest.open("GET", url);
    xmlHttpRequest.send();
}

function displayPerson(person) {
    document.getElementById("h1").innerHTML = person.name;
    document.getElementById("personHeight").innerHTML = person.height;
    document.getElementById("personWeight").innerHTML = person.mass;
    document.getElementById("personEyeColor").innerHTML = person.eye_color;
    document.getElementById("personHairColor").innerHTML = person.hair_color;
}