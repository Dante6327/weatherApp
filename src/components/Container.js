import React, { useContext } from "react";
import styled from "styled-components";
import bgImg from "../assets/images/clean-weather-mobile.jpg";
import CurrentWeather from "./CurrentWeather";
import Title from "./Title";
import WeatherContext from "../providers/GetCurrentWeatherContext";
import Loading from "../assets/images/loading2.gif";

const Background = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  background-color: rgba(051, 051, 051, 1);
  width: 90%;
  height: 95%;
  opacity: 0.7;
  border-radius: 20px;
`;

const CustomLoadig = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Container = () => {
  //API 호출이 완료되지 않았을 경우 loading은 true로 들어오며, 이를 통해 Loading 사용
  const [current, forecast, loading] = useContext(WeatherContext);
  if (loading) {
    return (
      <Background src={bgImg}>
        <Main>
          <CustomLoadig src={Loading} />
        </Main>
      </Background>
    );
  } else {
    return (
      <Background src={bgImg}>
        <Main>
          <Title />
          {<CurrentWeather />}
        </Main>
      </Background>
    );
  }
};

export default Container;
