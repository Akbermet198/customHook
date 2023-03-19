import { useState } from "react";

export const useCounter = (initial) => {
 const [count, setCount] = useState(initial || 0);


 const incrementLevel = () => {
   setCount((prevState) => {
     if (prevState === 0) {
       return (prevState += 1);
     } else if (prevState < 0) {
       return (prevState -= prevState);
     } else {
       return (prevState += prevState);
     }
   });
 };
 const decrementLevel = () => {
   setCount((prevState) => {
     if (prevState === 0) {
       return (prevState -= 1);
     } else if (prevState > 0) {
       return (prevState -= prevState);
     } else {
       return prevState - Math.abs(prevState);
     }
   });
 };
 
 const resetCounter = () => {
   setCount(0);
 };
 return {
   count,
   resetCounter,
   incrementLevel,
   decrementLevel,
 };
};
