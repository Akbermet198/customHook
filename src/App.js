import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Button } from "./components/button/Button";
import Counter from "./components/counter/Counter";
import Input from "./components/input/input";
import { Timer } from "./components/timer/timer";

function App() {
  const [exercise, setExercise] = useState(null);

  const exerciseHandler = (parameter) => {
    setExercise(parameter);
  };

  return (
    <Contayner>
      <StyledButtons>
        <Button onClick={() => exerciseHandler(1)}>Counter</Button>

        <Button onClick={() => exerciseHandler(2)}>Input</Button>

        <Button onClick={() => exerciseHandler(3)}>Timer</Button>
      </StyledButtons>
      <div>
        {exercise === 1 && <Counter />}
        {exercise === 2 && <Input />}
        {exercise === 3 && <Timer />}
      </div>
    </Contayner>
  );
}
export default App;

const Contayner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  /* padding: 20px; */
  background-color: #f4ecec;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const StyledButtons = styled.div`
background-color: silver;
width: 100%;
height: 100px;
display: flex;
justify-content: center;
padding: 30px;;
`;
