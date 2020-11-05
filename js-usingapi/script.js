
document.addEventListener('DOMContentLoaded', bindButtons,);

function bindButtons() {
  let docBod = document.getElementById('docBod');
  let f = 1;
  let req = new XMLHttpRequest();
  let URLhost = 'https://swapi.co/api/planets/?page=';
  req.open('GET', URLhost, true);
  req.addEventListener('load', function () {
    if (req.status >= 200 && req.status < 400) {
      let response = JSON.parse(req.responseText);
      console.log(response);
      let planetHead = document.createElement('thead');
      docBod.appendChild(planetHead);
      planetHead.innerHTML += "<td>" + "Planet name" + "</td>" + "<td>" + " Planet Populati" + "</td>" + "<td>" + "Planet Climate" + "</td>" +
        "<td>" + "Planet Gravity" + "</td>";
      for (let k = 0; k < response.results.length; k++) {
        (function (y) {
          let planetIn = document.createElement('tr');
          planetIn.innerHTML += "<td>" + response.results[y].name + "</td>" + "<td>" + response.results[y].population + "</td>" + "<td>" +
            response.results[y].climate + "</td>" + "<td>" + response.results[y].gravity + "</td>";
          planetHead.appendChild(planetIn);
        })(k);
      }
    } else {
      console.log('Error in network request: ' + req.statusText);
    }
  });
  req.send(null);
  event.preventDefault();

  document.getElementById('next').addEventListener('click', function (event) {
    if (f < 7) {
      docBod.innerHTML = "";
      f++;
      let req = new XMLHttpRequest();
      let URLhost = 'https://swapi.co/api/planets/?page=' + f;
      req.open('GET', URLhost, true);
      req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
          let response = JSON.parse(req.responseText);
          let planetHead = document.createElement('thead');
          docBod.appendChild(planetHead);
          planetHead.innerHTML += "<td>" + "Planet name" + "</td>" + "<td>" + " Planet Populati" + "</td>" + "<td>" + "Planet Climate" + "</td>" +
            "<td>" + "Planet Gravity" + "</td>";

          for (let k = 0; k < response.results.length; k++) {
            (function (y) {
              let planetIn = document.createElement('tr');
              planetIn.innerHTML += "<td>" + response.results[y].name + "</td>" + "<td>" + response.results[y].population + "</td>" + "<td>" +
                response.results[y].climate + "</td>" + "<td>" + response.results[y].gravity + "</td>";
              planetHead.appendChild(planetIn);
            })(k);
          }

        } else {
          console.log('Error in network request: ' + req.statusText);
        }
      });
      req.send(null);
      event.preventDefault();
    }
  });

  document.getElementById('prev').addEventListener('click', function (event) {
    if (f > 1) {
      docBod.innerHTML = "";
      f--;
      let req = new XMLHttpRequest();
      let URLhost = 'https://swapi.co/api/planets/?page=' + f;
      req.open('GET', URLhost, true);
      req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
          let response = JSON.parse(req.responseText);
          let planetHead = document.createElement('thead');
          docBod.appendChild(planetHead);
          planetHead.innerHTML += "<td>" + "Planet name" + "</td>" + "<td>" + " Planet Populati" + "</td>" + "<td>" + "Planet Climate" + "</td>" +
            "<td>" + "Planet Gravity" + "</td>";
          for (let k = 0; k < response.results.length; k++) {
            (function (y) {
              let planetIn = document.createElement('tr');
              planetIn.innerHTML += "<td>" + response.results[y].name + "</td>" + "<td>" + response.results[y].population + "</td>" + "<td>" +
                response.results[y].climate + "</td>" + "<td>" + response.results[y].gravity + "</td>";
              planetHead.appendChild(planetIn);
            })(k);
          }

        } else {
          console.log('Error in network request: ' + req.statusText);
        }
      });
      req.send(null);
      event.preventDefault();
    }
  });
}