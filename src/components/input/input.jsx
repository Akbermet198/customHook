import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
const Input = () => {
  const [selectType, setSelectType] = useState("text");

  const { inputState, onChangeHandler, isEmailValid } = useInput(selectType);
  console.log(isEmailValid);
  return (
    <Contayner>
      <select
        style={{
          margin: "20px",
          borderRadius: "6px",
          padding: " 6px 10px",
          border: "solid 1px gray",
          outlineStyle: "none"
        }}
        onChange={(event) => setSelectType(event.target.value)}
        value={selectType}
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
        <option value="date">Date</option>
      </select>

      {selectType === "text" && (
        <InputForm
          inputState={inputState}
          onChangeHandler={onChangeHandler}
          isEmailValid={isEmailValid}
        >
          {selectType}
        </InputForm>
      )}
      {selectType === "email" && (
        <InputForm inputState={inputState} onChangeHandler={onChangeHandler}>
          {selectType}
        </InputForm>
      )}
      {selectType === "password" && (
        <InputForm inputState={inputState} onChangeHandler={onChangeHandler}>
          {selectType}
        </InputForm>
      )}
      {selectType === "date" && (
        <InputForm inputState={inputState} onChangeHandler={onChangeHandler}>
          {selectType}
        </InputForm>
      )}
    </Contayner>
  );
};

export default Input;

const Contayner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

   option{
   border: none;
   border-radius: 6px;
   outline-style: none;
  height: 400px;
  }
`;



const InputForm = ({ children, onChangeHandler,inputState }) => {
  const { isEmailValid } = useInput("", "email","password", "date");
  console.log(isEmailValid);
  return (
    <div>
      <form action="">
        <label htmlFor=""></label>
        <StyledInput
       
          isEmailValid={isEmailValid}
          type={children}
          placeholder={children}
          value={inputState}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
};

const getBachroundColor = (props) => {
  return props.isEmailValid === true ? "#8a2b06" : "#FFF";
};
const StyledInput = styled.input`
  background-color: ${getBachroundColor};
  border-radius: 10px;
  border: solid 1px gray;
  padding: 6px 10px;
  outline-style: none;
  
`;


// кетире берейинби? Ой Valid бар да 