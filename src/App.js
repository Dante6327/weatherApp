import { useEffect, useState, useContext } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { WeatherProvider } from "./providers/GetCurrentWeatherContext";
import Container from "./components/Container";

function App() {
  return (
    <>
      <GlobalStyle />
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </>
  );
}

export default App;
