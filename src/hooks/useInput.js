import {  useState} from "react";

const useInput = (initial) => {
  const [inputState, setInputState] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);

  const onChangeHandler = (event) => {
    setInputState(event.target.value);
    if (initial === "text" || initial === "password") {
      setEmailValid(inputState.trim().length >= 5);
    }
    if (initial === "email") {
      setEmailValid(inputState.trim().length >= 5 && inputState.includes("@"));
    }
    if (initial === "date") {
      setEmailValid(true);
    }
  };

  return {
    inputState,
    setInputState,
    onChangeHandler,
    isEmailValid,
  };
};

export default useInput;
