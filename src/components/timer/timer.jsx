import styled from "styled-components";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../button/Button";

export const Timer = () => {
  const {
    seconds,
    stopTimer,
    inputState,
    onChangeHandler,
    startTimer,
    restartTimer,
  } = useTimer();
  return (
    <>
    <StyledDiv>
    <label htmlFor=""></label>
      <input onChange={onChangeHandler} value={inputState} type="number" />
      <p>{seconds}</p>
    </StyledDiv>

      <Button onClick={startTimer}>start</Button>
      <Button onClick={stopTimer}>stop</Button>
      <Button onClick={restartTimer}>restart</Button>
    </>
  );
};

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
input{
 border-radius: 10px;
  border: solid 1px gray;
  padding: 6px 10px;
  outline-style: none;
  /* color: #f4ecec; */
}
`