import axios from "axios";


export function getCityWeatherData(city) {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"d2cd74077bf66b09f73f35b12dca5c00"}`,
    headers: { "X-API-KEY": "scuS0xK9W2buLMmGp0WbIA==DdLVDCFbZ15RdtqN" },
  });
}

export function getGeoCoordinates(city) {
  return axios({
    method: "get",
    url: `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
    headers: { "X-API-KEY": "scuS0xK9W2buLMmGp0WbIA==DdLVDCFbZ15RdtqN" },
  });
}

export function getCityName(lat, lon) {
  return axios({
    method: "get",
    url: `https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`,
    headers: { "X-API-KEY": "scuS0xK9W2buLMmGp0WbIA==DdLVDCFbZ15RdtqN" },
  });
}

export function getWeeklyWeatherData(lat, lon) {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${"d2cd74077bf66b09f73f35b12dca5c00"}`,
  });
}

export function getCountryNews(country) {
  return axios({
    method: "get",
    url: `https://gnews.io/api/v4/top-headlines?lang=en&country=${country}&max=20&apikey=${"db595e2a4eeff9abad0d5fcf4d9f699a"}`,
  });
}
