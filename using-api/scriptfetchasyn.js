document.querySelector("button")
    .addEventListener("click", () => {
        let personId = document.getElementById("personId").value;

getDataAsync(personId);
 async function getDataAsync(personId){
    try{
        let response  =await fetch(`https://swapi.co/api/people/${personId}/`)
        let person =   await response.json();
        displayPerson(person);

        let speciesResponse = await fetch(person.species)
        let species = speciesResponse.json()
        document.getElementById("speciesname")
        .innerHTML = species.name

    
    } catch (error){
        console.log(error);
    }   
}
});


    
   

function displayPerson(person) {
    document.getElementById("h1").innerHTML = person.name;
    document.getElementById("personHeight").innerHTML = person.height;
    document.getElementById("personWeight").innerHTML = person.mass;
    document.getElementById("personEyeColor").innerHTML = person.eye_color;
}