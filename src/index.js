// Challenge 4: 1 - Date
currentDate(); // calling the date function

function currentDate() {
  let now = new Date();
  let hour = now.getHours();
  // adding a training - when minutes are in single digits
  let minutes = now.getMinutes() < 10 ? "00" : "" + now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let year = now.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];

  let h1 = document.querySelector(".date");
  h1.innerHTML = ` ${day} ${hour}:${minutes}`;

  let today = document.querySelector("#today");
  let tom = document.querySelector("#tom");
  let t1 = document.querySelector("#t1");
  let t2 = document.querySelector("#t2");
  let t3 = document.querySelector("#t3");
  let todayDate = document.querySelector("#todayDate");

  today.innerHTML = ` ${day} `;
  todayDate.innerHTML = `${month} ${date} ${year}`;

  // console.log(today.innerHTML);
  if (today.innerHTML === "Saturday") {
    tom.innerHTML = `${days[0]}`;
    t1.innerHTML = `${days[1]}`;
    t2.innerHTML = `${days[2]}`;
    t3.innerHTML = `${days[3]}`;
  } else if (today.innerHTML === "Sunday") {
    tom.innerHTML = `${days[1]}`;
    t1.innerHTML = `${days[2]}`;
    t2.innerHTML = `${days[3]}`;
    t3.innerHTML = `${days[4]}`;
  } else if (today.innerHTML === "Monday") {
    tom.innerHTML = `${days[2]}`;
    t1.innerHTML = `${days[3]}`;
    t2.innerHTML = `${days[4]}`;
    t3.innerHTML = `${days[5]}`;
  } else if (today.innerHTML === "Tuesday") {
    tom.innerHTML = `${days[3]}`;
    t1.innerHTML = `${days[4]}`;
    t2.innerHTML = `${days[5]}`;
    t3.innerHTML = `${days[6]}`;
  } else if (today.innerHTML === "Wednesday") {
    tom.innerHTML = `${days[4]}`;
    t1.innerHTML = `${days[5]}`;
    t2.innerHTML = `${days[6]}`;
    t3.innerHTML = `${days[0]}`;
  } else if (today.innerHTML === "Thursday") {
    tom.innerHTML = `${days[5]}`;
    t1.innerHTML = `${days[6]}`;
    t2.innerHTML = `${days[0]}`;
    t3.innerHTML = `${days[1]}`;
  } else if (today.innerHTML === "Friday") {
    tom.innerHTML = `${days[6]}`;
    t1.innerHTML = `${days[0]}`;
    t2.innerHTML = `${days[1]}`;
    t3.innerHTML = `${days[2]}`;
  }
}

// let weather = {
//   paris: {
//     temp: Math.round(19.7),
//     humidity: 80
//   },
//   tokyo: {
//     temp: Math.round(17.3),
//     humidity: 50
//   },
//   lisbon: {
//     temp: Math.round(30.2),
//     humidity: 20
//   },
//   "san francisco": {
//     temp: Math.round(20.9),
//     humidity: 100
//   },
//   moscow: {
//     temp: Math.round(-5),
//     humidity: 20
//   }
// };
// function cToF(celsius)
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;

//   return cToFahr;
// }

// Challenge 4: 3 - C-F conversion
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// Challenge 4: 2 - Daisplay city searched
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
