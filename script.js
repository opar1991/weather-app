const getUserInput = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const image = document.querySelector(".icon");
const errors = document.querySelector(".errors");
async function getWeather(city) {
  var res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=505b22d483bbfb73896b466bc462d4ee&units=metric`
  );
  if (res.status == 404) {
    errors.style.display = "block";
  } else {
    errors.style.display = "none";
  }
  var data = await res.json();
  console.log(data);
  var temp = (document.querySelector(".degree").innerHTML =
    Math.round(data.main.temp) + "°C");
  var city = (document.querySelector(".city").innerHTML = data.name);
  var humidity = (document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%");
  var wind = (document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + "Kph");
  // CHANGING WEATHER IMAGES
  if (data.weather[0].main == "Clouds") {
    image.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "./images/rain.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "./images/humidity.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "./images/rainsun.jpg";
  }
}
btn.addEventListener("click", () => {
  getWeather(getUserInput.value);
});
