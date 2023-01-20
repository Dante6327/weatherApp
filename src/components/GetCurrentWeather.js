export const GetCurrentWeather = async () => {
  const myPos = await getMyPos();
  const latitude = myPos.coords.latitude;
  const longitude = myPos.coords.longitude;

  return await getWeatherByCurrentLocation(latitude, longitude);
};

const getMyPos = () => {
  return new Promise((resolve, rejected) => {
    navigator.geolocation.getCurrentPosition(resolve, rejected);
  });
};

const getWeatherByCurrentLocation = async (lat, lon) => {
  let weather = {};
  const url = `${process.env.REACT_APP_WEATHER_URL}/current`;
  const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

  try {
    const response = await fetch(
      `${url}?access_key=${apiKey}&query=${lat},${lon}`
    );
    const data = await response.json();
    if (data.success !== undefined && data.success === false) {
      throw new Error(data.error.info);
    }

    weather.country = data.location.country; //국가
    weather.city = data.location.name; //도시
    weather.temperature = data.current.temperature; //온도
    weather.whatherIcon = data.current.weather_icons; //날씨아이콘
    weather.weatherDescription = data.current.weather_descriptions; //날씨상태
    weather.windSpeed = data.current.wind_speed; //풍속
    weather.windDir = data.current.wind_dir; //풍향

    //return weather;
    return weather;
  } catch (error) {
    //임시로 이렇게 쓰자.. API 최대 호출이 월 250회란다..
    //apiKey 뒤에 123 빼면 정상호출된다.

    return error;
  }
};
