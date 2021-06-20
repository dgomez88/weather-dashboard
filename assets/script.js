var cityNameSearch = document.querySelector("#city-name");
var userCitySearch = document.querySelector("#city");

var getWeatherRepo = function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ba16556d951a6c55d84f1ab8d3febc95"
  );
};

getWeatherRepo();

var cityNameSearchBar = function (event) {
  event.preventDefault();
  console.log(event);
};

userCitySearch.addEventListener("submit", cityNameSearch);
