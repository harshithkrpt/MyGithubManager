import React from "react";

import "./App.css";
import MockData from "./components/MockData";
import Circle from "./components/Circle";
import styled from "styled-components";

const GridUI = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
`;

function App() {
  const array = ["H", "A", "R", "S", "H", "I", "T", "H"];

  return (
    <div className="App">
      <MockData />
      <GridUI>
        {array.map((item, index) => {
          return <Circle key={index} name={`${item}`} />;
        })}
      </GridUI>
    </div>
  );
}

export default App;
