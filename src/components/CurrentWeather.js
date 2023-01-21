import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import WeatherContext from "../providers/GetCurrentWeatherContext";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CurrentDiv = styled.div`
  padding: 30px;
  text-align: center;
`;
const Location = styled.div`
  font-size: 35px;
`;

export const FontAwesomeIcon2 = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 0 auto;
`;

const Temperature = styled.div`
  font-size: 60px;
  padding-top: 40px;
`;

const Wind = styled.div`
  font-size: 20px;
`;

const CurrentWeather = () => {
  const [value, loading] = useContext(WeatherContext);

  return (
    <CurrentDiv>
      <Location>
        <FontAwesomeIcon2 icon={faLocationDot} />
        {` ${value.city} City`}
        <br />
        {` in ${value.country}`}
      </Location>
      <Temperature>
        {`${value.temperature} ℃`} <br /> {` ${value.weatherDescription[0]}`}
      </Temperature>
      <Wind>
        {`windSpeed : ${value.windSpeed}`}
        <br />
        {`windDirection : ${value.windDir}`}
      </Wind>
    </CurrentDiv>
  );
};

export default CurrentWeather;
