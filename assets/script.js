var cityNameSearch = document.querySelector("#city-name");
var userCitySearch = document.querySelector("#city");
var searchButton = document.querySelector("#search-button");
var formSearch = document.querySelector("#search-city");

var getWeatherRepo = function (user) {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ba16556d951a6c55d84f1ab8d3febc95"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

getWeatherRepo();

var displayWeatherRepo = function (repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
};

var formSubmitHandler = function (event) {
  event.preventDefault();

  var 
};

formSearch.addEventListener("submit", formSubmitHandler);
