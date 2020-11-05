
// $(table).load(function() {
//     // Animate loader off screen
//     $(".se-pre-con").fadeOut("slow");;
// });

document.getElementById('getForm').addEventListener('submit', searchCountries);

function searchCountries(e){
  e.preventDefault();

  let countryName = document.getElementById('country-name').value;
  const subHead = document.getElementById('sub-header');

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.eu/rest/v2/name/'+countryName, true);

  xhr.onload = function(){
    if(this.status == 200){

      let countries = JSON.parse(this.responseText);

      let output = '';
      for(let i in countries){
        for(let k in countries[i].currencies){
          output +=
            `
            <thead class="country">
            <tr>
            <td class="ctr-flag"><img src="${countries[i].flag}"></td>
            </tr>
            <tr>
              <td>Name: ${countries[i].name}</td>
              </tr>
              <tr>
              <td>Capital: ${countries[i].capital}</td>

              </tr>
              <tr>
              <td >Region: ${countries[i].region}</td>
              </tr>
<tr> 
            <td class="ctr-pop">Population: ${countries[i].population}</td>
            </tr>
            <tr>
            <td>Currencie: ${countries[i].currencies[k].name}</td>
            </tr>
          <tr>
            <td>Languages:${countries[i].languages.map(language => language.name)}</td>
          </tr>
            </thead>

            `;
        
    }
      }
      subHead.classList.remove('hidden');
      document.getElementById('countries-wrapper').innerHTML = output;
    }
}

  xhr.onerror = function(){
    console.log('Request Error...');
  }

  xhr.send();

  document.forms["getForm"].reset();
}

