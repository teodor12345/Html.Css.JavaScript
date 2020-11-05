let movies = ["fightclub","donniedarko","glass","memento"];


let resultDiv = document.getElementById("result").firstElementChild;
let messageDiv = document.getElementById("message");
let findItemRow = document.getElementById("findItem");
let addItemRow = document.getElementById("addItem");
let getMoviesRow = document.getElementById("getMovies");


function showMoviesList(element) {
    if(movies.length === 0){
      return "No movies on your list yet!"
    }
    element.innerHTML = "";
    for(let listItem of movies) {
      if (listItem !== null) {
        element.innerHTML += `<li>${listItem}</li>`;
      }
    }
    return "Your Movies:"
  }

  function checkForItemInMoviesList(item) {
    for (let listItem of movies) {
      if (listItem === item) {
          messageDiv.style.color="green";
        return `The item ${item} was found and its available for rent!`;
      }
    }
    messageDiv.style.color="red";
    return `There was no ${item} item in the list aka its not available for rent!`;
  }
  
  
findItemRow.querySelector("button").addEventListener("click", function(){
    let message = checkForItemInMoviesList(findItemRow.querySelector("input").value);
    findItemRow.querySelector("input").value = "";
    messageDiv.innerText = message;
    showMoviesList(resultDiv);
  });

  getMoviesRow.querySelector("button").addEventListener("click", function(){
    console.log(resultDiv);
    let message = showMoviesList(resultDiv);
    messageDiv.innerText = message;
  });