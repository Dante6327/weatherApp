import React, { useState, useEffect, createContext } from "react";
import { getCurrentWeather } from "../components/GetCurrentWeather";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [current, setCurrent] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCurrentWeather().then((res) => setCurrent(res));
  }, []);
  if (current !== undefined && loading) {
    //API 호출하여 데이터를 받아왔을 때 화면에 뿌리기 위해 loading을 사용
    setLoading(!loading);
  }
  return (
    <WeatherContext.Provider value={[current, loading]}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
