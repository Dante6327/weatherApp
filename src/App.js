import { useEffect, useState } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { GetCurrentWeather } from "./components/GetCurrentWeather";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    GetCurrentWeather().then((res) => setData(res));
  }, []);

  return (
    <>
      <GlobalStyle />
      {JSON.stringify(data)}
    </>
  );
}

export default App;
