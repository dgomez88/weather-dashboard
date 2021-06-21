var cityNameSearch = document.querySelector("#city-name");
var userCitySearch = document.querySelector("#city");
var searchButton = document.querySelector("#search-button");
var formSearch = document.querySelector("#search-city");
var cityContainer = document.querySelector("#city-info-container");
var cityInfoSearch = document.querySelector("#city-info-search");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = cityNameSearch.value.trim();

  if (username) {
    getWeatherRepo(username);
    cityNameSearch.value = "";
  } else {
    alert("Please enter a city name");
  }
};

var displayWeatherRepo = function (displayRepo, searchTerm) {
  for (var i = 0; i < displayRepo.length; i++) {
    var displayRepoName =
      displayRepo[i].displayWeatherRepo.login + "/" + displayRepo[i].name;

    var displayWeatherEl = document.createElement("span");

    var displayTitleEl = document.createElement();

    displayWeatherEl.appendChild();
  }
};

var getWeatherRepo = function (user) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ba16556d951a6c55d84f1ab8d3febc95"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data, user);
    });
  });
};

getWeatherRepo();
formSearch.addEventListener("submit", formSubmitHandler);
