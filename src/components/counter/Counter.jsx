import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";
import { Button } from "../button/Button";

 const  Counter= () =>{
  const {count, incrementLevel, decrementLevel, resetCounter }=useCounter(0)
  
  return (
    <StyledDiv  >
      <p>{count}</p>
      <div>
      <Button onClick={incrementLevel}>+</Button>
      <Button onClick={decrementLevel}>-</Button>
      <Button onClick={resetCounter}>reset</Button>
      </div>
    </StyledDiv>
  );
}

export default Counter;

const StyledDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 p{
  padding: 20px 20px;
 }
`