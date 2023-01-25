import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import WeatherContext from "../providers/GetCurrentWeatherContext";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CurrentDiv = styled.div`
  padding: 30px;
  text-align: center;
  p {
    line-height: 10px;
  }
`;
const Location = styled.div`
  font-size: 35px;
`;

export const FontAwesomeIcon2 = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 0 auto;
`;

const Temperature = styled.div`
  font-size: 40px;
  padding-top: 10px;
`;
const TemperatureDetail = styled.p`
  font-size: 16px;
`;
const Wind = styled.div`
  font-size: 20px;
`;
const SM = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
`;
const Sun = styled.div``;
const Moon = styled.div``;
const CurrentWeather = () => {
  const [current, forecast, loading] = useContext(WeatherContext);
  console.log(forecast);
  return (
    <CurrentDiv>
      <Location>
        <FontAwesomeIcon2 icon={faLocationDot} />
        <p>{` ${current.city} City`}</p>
        <p>{` in ${current.country}`}</p>
      </Location>
      <Temperature>
        <p>{`현재기온 : ${current.temperature} ℃`}</p>

        <TemperatureDetail>{` 최고기온 : ${forecast.maxtemp}`}</TemperatureDetail>
        <TemperatureDetail>{` 최저기온 : ${forecast.mintemp}`}</TemperatureDetail>
        <TemperatureDetail>{` 평균기온 : ${forecast.avgtemp}`}</TemperatureDetail>
        <TemperatureDetail>{` 자외선지수 : ${forecast.uvIndex}`}</TemperatureDetail>

        <p>{`날씨 : ${current.weatherDescription[0]}`}</p>
      </Temperature>
      <Wind>
        <p>{`풍속 : ${current.windSpeed}km/h`}</p>
        <p>{`풍향 : ${current.windDir}`}</p>
      </Wind>
      <SM>
        <Sun>
          <p>{`일출 : ${forecast.sunrise}`}</p>
          <p>{`일몰 : ${forecast.sunset}`}</p>
        </Sun>
        <Moon>
          <p>{`월출 : ${forecast.moonrise}`}</p>
          <p>{`월몰 : ${forecast.moonset}`}</p>
        </Moon>
      </SM>
    </CurrentDiv>
  );
};

export default CurrentWeather;
