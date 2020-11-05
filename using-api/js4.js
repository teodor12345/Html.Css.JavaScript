document.querySelector("button")
    .addEventListener("click", () => {
        let personId = document.getElementById("personId").value;
        getData(personId);
        console.log("after asyync function");
    });

async function getData(personId) {
    let person = await callApi(`https://swapi.co/api/people/${personId}/`)
            displayPerson(person);

        let species = await callApi(person.species);
                 document.getElementById("speciesname")
                    .innerHTML = species.name;
              
    
};

function callApi(url) {
    return new Promise((resolve, reject) => {
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onload = function () {
            // reject("somethings wrong");
            if (xmlHttpRequest.status > 299)
                reject("unsuecessfull response code");
            else {
                let response = xmlHttpRequest.response;
                let dataParsed = JSON.parse(response);
                resolve(dataParsed);
            }
        };
        xmlHttpRequest.open("GET", url);
        xmlHttpRequest.send();
    });
}
function displayPerson(person) {
    document.getElementById("h1").innerHTML = person.name;
    document.getElementById("personHeight").innerHTML = person.height;
    document.getElementById("personWeight").innerHTML = person.mass;
    document.getElementById("personEyeColor").innerHTML = person.eye_color;
    document.getElementById("personHairColor").innerHTML = person.hair_color;
}