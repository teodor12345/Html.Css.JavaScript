

let array = [22, 33, 44,55,77];
let contentDiv = document.getElementById("array");
let ul = document.createElement("ul");



function displayarray(array) {
    contentDiv.appendChild(ul);
    for (i = 0; i < array.length; i++) {
        ul.innerHTML += `<li class =>${array[i]}</li>`;
                
          let sum = array.reduce(function(a, b,){
                return a + b;
            }, 0);
            console.log(sum);
        }
        }
    


displayarray(array);
displayarray(sum);





let puts = document.getElementById("sum");

function sum(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
console.log(sum([22, 33, 44]));

