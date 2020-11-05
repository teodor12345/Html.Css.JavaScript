window.show = function (elementId) {
    let elements = document.getElementsByTagName("div");
    for (let i = 0; i < elements.length; i++)
        elements[i].className = "hidden";
    document.getElementById(elementId).className = "";
}

let name = document.querySelector(".name");
let temp = document.querySelector(".temp");
let buttonone = document.querySelector("#firstone");
let averagehumidity = document.querySelector(".averagehumidity");
let hightemp = document.querySelector(".temphigh");
let firstday = document.querySelector(".nextday");
let highesthumidity = document.querySelector(".highesthumidity");
let lowesthumidity = document.querySelector(".lowesthumidity");
let lowtemp = document.querySelector(".templow");
let warmestday = document.querySelector(".warmestday");
let coldestday = document.querySelector(".coldestday");


buttonone.addEventListener("click", function () {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=skopje&appid=e5ab9ab2cb8bd71a7c310941fd9994ee&units=metric')
        .then(response => response.json())
        .then(data => {
            getData(data);
            let nameValue = data.city.name;
            name.innerHTML = `${nameValue}`

        });
});

function calculateData(data) {
    let Averagetemperature = 0;
    let highestTemp = data.list[0];
    let lowestTemp = data.list[0];
    let Averagehumidity = 0;
    let highestHumidity = data.list[0];
    let lowestHumidity = data.list[0];
    for (const item of data.list) {
        Averagetemperature += item.main.temp;
        Averagehumidity += item.main.humidity;
        if (highestTemp.main.temp < item.main.temp) {
            highestTemp = item;
        }
        if (lowestTemp.main.temp > item.main.temp) {
            lowestTemp = item;
        }
        if (highestHumidity.main.humidity < item.main.humidity) {
            highestHumidity = item;
        }
        if (lowestHumidity.main.humidity > item.main.humidity) {
            lowestHumidity = item;
        }
    }
    return {
        temperature: {
            max: highestTemp.main.temp,
            avg: Math.round(Averagetemperature / data.list.length),
            min: lowestTemp.main.temp
        },
        humidity: {
            max: highestHumidity.main.humidity,
            avg: Math.round(Averagehumidity / data.list.length),
            min: lowestHumidity.main.humidity
        },
        warmestTime: new Date(highestTemp.dt * 1000).toDateString(),
        coldestTime: new Date(lowestTemp.dt * 1000).toDateString()
    };
}
function getData(data) {
    let get = calculateData(data);
    temp.innerHTML = `Average temp ${get.temperature.avg} 'C`;
    hightemp.innerHTML = `High temp ${get.temperature.max} 'C ||`;
    lowtemp.innerHTML = `Low temp ${get.temperature.min} 'C`;
    averagehumidity.innerHTML = `Avg Humidity ${get.humidity.avg}%`;
    lowesthumidity.innerHTML = `Low humidity ${get.humidity.min} % `;
    highesthumidity.innerHTML = ` High humidity ${get.humidity.max}% ||`;
    warmestday.innerHTML = `Warmest day of the week: ${get.warmestTime}`;
    coldestday.innerHTML = `Coldest day of the week: ${get.coldestTime}`;
}

let buttontwo = document.querySelector("#second");
let table = document.getElementById("tablee");
let tablerow = document.createElement("thead");

buttontwo.addEventListener("click", function () {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=skopje&appid=e5ab9ab2cb8bd71a7c310941fd9994ee&units=metric")
        .then(response => response.json())
        .then(data => {
            let tempiValue = data['list'][1]['main']['temp'];
            let humidityvalue = data['list'][1]['main']['humidity'];
            let windValue = data['list'][5]['wind']['speed'];
            let descriptionValue = data['list'][2]['weather'][0]['description'];
            let timeanddateValue = convertUnixTime(data.list[0].dt).toLocaleString();
            let iconcode = "<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png'>"

            table.appendChild(tablerow);
            tablerow.innerHTML = "<td>" + "Icon" + "</td>" + "<td>" + " Date and Time" + "</td>" + "<td>" + "Description" + "</td>" +
                "<td>" + "Temp" + "</td>" + "<td>" + "Wind" + "</td>" + "<td>" + "Humidity" + "</td>";
            let tablerow1 = document.createElement("tr");
            tablerow1.innerHTML = "<td>" + iconcode + "</td>" + "<td>" + timeanddateValue + "</td>" + "<td>" + descriptionValue + "</td>" +
                "<td>" + tempiValue + "'C" + "</td>" + "<td>" + windValue + "m/s" + "</td>" + "<td>" + humidityvalue + "%" + "</td>";
            tablerow.appendChild(tablerow1);
            let tempiValue01 = data['list'][2]['main']['temp'];
            let humidityvalue01 = data['list'][2]['main']['humidity'];
            let windValue01 = data['list'][6]['wind']['speed'];
            let descriptionValue01 = data['list'][3]['weather'][0]['description'];
            let timeanddateValue01 = convertUnixTime(data.list[1].dt).toLocaleString();
            let iconcode01 = "<img src='https://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png'>"
            let tablerow2 = document.createElement("tr");
            tablerow2.innerHTML = "<td>" + iconcode01 + "</td>" + "<td>" + timeanddateValue01 + "</td>" + "<td>" + descriptionValue01 + "</td>" +
                "<td>" + tempiValue01 + "'C" + "</td>" + "<td>" + windValue01 + "m/s" + "</td>" + "<td>" + humidityvalue01 + "%" + "</td>";
            tablerow.appendChild(tablerow2);
            let tempiValue02 = data['list'][3]['main']['temp'];
            let humidityvalue02 = data['list'][3]['main']['humidity'];
            let windValue02 = data['list'][7]['wind']['speed'];
            let descriptionValue02 = data['list'][4]['weather'][0]['description'];
            let timeanddateValue02 = convertUnixTime(data.list[2].dt).toLocaleString();
            let iconcode02 = "<img src='https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png'>"
            let tablerow3 = document.createElement("tr");
            tablerow3.innerHTML = "<td>" + iconcode02 + "</td>" + "<td>" + timeanddateValue02 + "</td>" + "<td>" + descriptionValue02 + "</td>" +
                "<td>" + tempiValue02 + "'C" + "</td>" + "<td>" + windValue02 + "m/s" + "</td>" + "<td>" + humidityvalue02 + "%" + "</td>";
            tablerow.appendChild(tablerow3);
            let tempiValue03 = data['list'][4]['main']['temp'];
            let humidityvalue03 = data['list'][4]['main']['humidity'];
            let windValue03 = data['list'][8]['wind']['speed'];
            let descriptionValue03 = data['list'][5]['weather'][0]['description'];
            let timeanddateValue03 = convertUnixTime(data.list[3].dt).toLocaleString();
            let iconcode03 = "<img src='https://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png'>"
            let tablerow4 = document.createElement("tr");
            tablerow4.innerHTML = "<td>" + iconcode03 + "</td>" + "<td>" + timeanddateValue03 + "</td>" + "<td>" + descriptionValue03 + "</td>" +
                "<td>" + tempiValue03 + "'C" + "</td>" + "<td>" + windValue03 + "m/s" + "</td>" + "<td>" + humidityvalue03 + "%" + "</td>";
            tablerow.appendChild(tablerow4);
            let tempiValue04 = data['list'][5]['main']['temp'];
            let humidityvalue04 = data['list'][5]['main']['humidity'];
            let windValue04 = data['list'][9]['wind']['speed'];
            let descriptionValue04 = data['list'][6]['weather'][0]['description'];
            let timeanddateValue04 = convertUnixTime(data.list[4].dt).toLocaleString();
            let iconcode04 = "<img src='https://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png'>"
            let tablerow5 = document.createElement("tr");
            tablerow5.innerHTML = "<td>" + iconcode04 + "</td>" + "<td>" + timeanddateValue04 + "</td>" + "<td>" + descriptionValue04 + "</td>" +
                "<td>" + tempiValue04 + "'C" + "</td>" + "<td>" + windValue04 + "m/s" + "</td>" + "<td>" + humidityvalue04 + "%" + "</td>";
            tablerow.appendChild(tablerow5);
        })
})

function convertUnixTime(unixttime) {
    return new Date(unixttime * 1000);
}
