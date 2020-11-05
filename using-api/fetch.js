// document.querySelector("button")
//     .addEventListener("click", () => {
//         let personId = document.getElementById("personId").value;

//         fetch(`https://swapi.co/api/people/${personId}/`)
//             .then((data) => data.json())
//             .then((person) => {
//                 displayPerson(person);

//                 fetch(person.species)
//                     .then(data => data.json())
//                     .then(species => {
//                         document.getElementById("speciesname")
//                             .innerHTML = species.name
//                     });
//             })
//             .catch(error => console.log(error));
//     });
// function displayPerson(person) {
//     document.getElementById("h1").innerHTML = person.name;
//     document.getElementById("personHeight").innerHTML = person.height;
//     document.getElementById("personWeight").innerHTML = person.mass;
//     document.getElementById("personEyeColor").innerHTML = person.eye_color;
//     document.getElementById("personHairColor").innerHTML = person.hair_color;
// }


document.querySelector("button")
    .addEventListener("click", () => {
        let personId = document.getElementById("personId").value;
function parseJson  (data) {
    return data.json();
}
        fetch(`https://swapi.co/api/people/${personId}/`)
            .then(parseJson) 
            .then((person) => {
                displayPerson(person);

                fetch(person.species)
                    .then(parseJson)
                    .then(species => {
                        document.getElementById("speciesname")
                            .innerHTML = species.name
                    });
            })
            .catch(error => console.log(error));
    });

function displayPerson(person) {
    document.getElementById("h1").innerHTML = person.name;
    document.getElementById("personHeight").innerHTML = person.height;
    document.getElementById("personWeight").innerHTML = person.mass;
    document.getElementById("personEyeColor").innerHTML = person.eye_color;
    document.getElementById("personHairColor").innerHTML = person.hair_color;
}