// $(document).ready(function () {

// });
// //same as above
// $(function () {
//     $.ajax({
//         url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json",
//         success: function (response) {
//             let students = JSON.parse(response);
//             console.log(students);
//             solveExcersise1(students);
//         },
//         error: function (error) {
//             console.log(error);
//         }

//     });
// });


// function solveExcersise1(students) {
//     let studentswithaverageabove3 = students.filter(s => s.averageGrade > 3);
//     console.log(studentswithaverageabove3);

//     let femalesWIthaverageof5 = students.filter(s => s.gender === "Female" && s.averageGrade > 5)
//         .map(s => `${s.firstName}`);
// console.log(femalesWIthaverageof5);


//  let ageSum =students.reduce((sumAge,student) => sumAge + student.age,0);
// let ageAverage = ageSum / students.length;
// console.log(ageAverage);


// }


// with 5 miliseconds

// setTimeout(function () {
//     console.log("This is inside timeout");
// }, 5);

// console.log("after settimout");


// // with zero timeout
// setTimeout(function () {
//     console.log("This is inside timeout");
// }, 0);

// console.log("after settimout");

//callback functions

// function calculate(num1, num2, callbackCalculator) {
//     console.log(` num1:${num1} num2: ${num2}`);
//     //do some long processing
//     //wait for processing of num1 or num2 values from the server
//     callbackCalculator(num1, num2);
// };
// let callbacksum = (number1, number2) =>
//     console.log(` callback Sum of numbers: ${number1} and ${number2} is: ${number1 + number2}`);


// calculate(2, 5, callbacksum);


// $.ajax({
//     url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json",
//     success: callbackSucces,
//     error: callbackError
// });

// function callbackSucces(response) {
//     console.log(JSON.parse(response));
// }

// function callbackError(error) {
//     console.log(error);
// }



// setInterval(() => console.log(`interval handler`), 1000);

// $(function(){
//     $("button").on("click",function onClick(){
//         console.log("clicked"); //this will fire
//     });
// });


// create html with one button that when is clicked it will show 
//alert("hello");
//also show in the html counter (number that will be increased continuosly by 1)

// button = document.getElementById("button");
// counter = document.getElementById("h1");
// stopbutton = document.getElementById("secondbutton")

// button.addEventListener("click", function () {
//     alert("hello");
// })

// let i = 1;
// setInterval(() => counter.innerHTML=i++,1000);

// $(function () {
//     $("button").on("click", function () {
//         // alert("hello");
//         $("#span").text("Hello");
//         setTimeout(() => $("#span").text(""), 3000);
//     });
//     let counter = 0;
//     let intervalid =setInterval(function () {
//             counter++;
//             $("#h1").text(counter);
//         }, 1000);

//     let running = true;
//     $("#secondbutton").on("click", function () {
//         running = !running;
//         if (running) {
//             $(this).text("Pause");
//             intervalid = setInterval(function () {
//                 counter++;
//                 $("#h1").text(counter);
//             }, 1000);

//         }
//         else {
//             $(this).text("Resume");
//             clearInterval(intervalid);
//         }
//     });
// });



// plain js

document.getElementById("button").addEventListener("click", function () {
    // alert("hello");
    let greetingcounter = document.getElementById("span");
    greetingcounter.innerHTML = "Hello";
    setTimeout(() => greetingcounter.innerHTML = "", 3000);
});
let counter = 0;
let intervalid = setInterval(function () {
    counter++;
    document.getElementById("h1").innerHTML =counter;
}, 1000);

let running = true;
document.getElementById("secondbutton").addEventListener("click",function(){
    running = !running;
    if (running) {
        this.innerHTML ="Pause";
        intervalid = setInterval(function () {
            counter++;
            document.getElementById("h1").innerHTML=counter;
        }, 1000);

    }
    else {
        this.innerHTML="Resume";
        clearInterval(intervalid);
    }

})
   

