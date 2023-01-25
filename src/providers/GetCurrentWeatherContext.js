import React, { useState, useEffect, createContext } from "react";
import { getCurrentWeather } from "../components/GetCurrentWeather";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCurrentWeather().then((res) => {
      setCurrent(res[0]);
      setForecast(res[1]);
    });
  }, []);

  if (current !== undefined && forecast !== undefined && loading) {
    //API 호출하여 데이터를 받아왔을 때 화면에 뿌리기 위해 loading을 사용
    setLoading(!loading);
  }
  return (
    <WeatherContext.Provider value={[current, forecast, loading]}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
