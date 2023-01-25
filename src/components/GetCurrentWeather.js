export const getCurrentWeather = async () => {
  const myPos = await getMyPos();
  const latitude = myPos.coords.latitude;
  const longitude = myPos.coords.longitude;

  return await getWeatherByCurrentLocation(latitude, longitude);
};

export const getMyPos = () => {
  return new Promise((resolve, rejected) => {
    navigator.geolocation.getCurrentPosition(resolve, rejected);
  });
};

const getWeatherByCurrentLocation = async (lat, lon) => {
  let weather = {};
  let forecast = {};
  const url = `${process.env.REACT_APP_WEATHER_URL}/forecast`;
  const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

  try {
    const response = await fetch(
      `${url}?access_key=${apiKey}&query=${lat},${lon}`
    );
    const data = await response.json();
    if (data.success !== undefined && data.success === false) {
      throw new Error(data.error.info);
    }
    const foreDay = Object.keys(data.forecast)[0];

    weather.country = data.location.country; //국가
    weather.city = data.location.name; //도시
    weather.temperature = data.current.temperature; //온도
    weather.weatherIcon = data.current.weather_icons; //날씨아이콘
    weather.weatherDescription = data.current.weather_descriptions; //날씨상태
    weather.windSpeed = data.current.wind_speed; //풍속
    weather.windDir = data.current.wind_dir; //풍향

    forecast.maxtemp = data.forecast[foreDay].maxtemp;
    forecast.mintemp = data.forecast[foreDay].mintemp;
    forecast.avgtemp = data.forecast[foreDay].avgtemp;
    forecast.uvIndex = data.forecast[foreDay].uv_index;
    forecast.sunrise = data.forecast[foreDay].astro.sunrise;
    forecast.sunset = data.forecast[foreDay].astro.sunset;
    forecast.munrise = data.forecast[foreDay].astro.moonrise;
    forecast.munset = data.forecast[foreDay].astro.moonset;
    forecast.moonIllumination = data.forecast[foreDay].astro.moon_illumination;

    //return weather;
    return [weather, forecast];
  } catch (error) {
    return error;
  }
};
