


// function getCountry(){

// fetch("https://restcountries.eu/rest/v2/alpha/mk")
// .then((data) => data.json())
// .then((country) => {
//     console.log(country);
//     console.log(`Country ${country.name}`);
//     console.log(`Bordering countries: ${country.borders}`);

// });
// }

// getCountry();


document.querySelector("button")
    .addEventListener("click", () => {
        let countrycode = document.getElementById("countryId").value;
function parseJson  (data) {
    return data.json();
}
        fetch(`https://restcountries.eu/rest/v2/alpha/${countrycode}`)
            .then(parseJson) 
            .then((country) => {
                displayCountry(country);
                console.log(country);
                console.log(`Boarding countries: ${country.borders}`);
                

            })
            .catch(error => console.log(error));
    });
    


function displayCountry(country) {
    document.getElementById("h1").innerHTML = `Country: ${country.name}${country}`;
    document.getElementById("h2").innerHTML = `Bording countries: ${country.borders}`;

}