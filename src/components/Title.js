import React from "react";
import styled from "styled-components";

const AppTitle = styled.div`
  text-align: center;
  font-size: 48px;
  padding-top: 20px;
`;

const Title = () => {
  return <AppTitle>Weather Forecast</AppTitle>;
};

export default Title;
