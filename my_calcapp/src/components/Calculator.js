import React, { useState } from "react";
import styled from "styled-components";
import Keypad from "./Keypad";
import DisplDiv from "./Display";

// Styled component for the calculator container
const DivPers = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1px;
  padding-bottom: 50px;
  background-color: #41d44b;
  width: 400px;
  height: 360px;
  border-radius: 15px 15px 15px 15px;
`;

function Calculator() {
  const [state, setState] = useState("");

  // Function to update the state with button clicks
  const showInfo = (click) => {
    let boton = click.target.name;
    setState(state + boton);
  };

  // Function to show the saved state from local storage
  const showLocalSt = () => {
    const savedState = window.localStorage.getItem("save");
    setState(savedState || "");
  };

  // Function to clear the saved state in local storage
  const clearLocalSt = () => {
    localStorage.clear();
    setState("");
  };

  // Function to save the state in local storage
  const saveInfo = (click) => {
    let boton = click.target.name;
    setState(state + boton);
    window.localStorage.setItem("save", state);
    setState("");
  };

  // Function to erase the display
  const eraseInfo = () => {
    setState("");
  };

  // Function to evaluate the operations and handle errors
  const evaluateOperations = () => {
    setState("");
    try {
      const result = eval(state);
      if (result === Infinity) {
        setState("Error: Division by zero");
        setTimeout(() => {
          eraseInfo();
        }, 3000);
      } else {
        setState(result);
      }
    } catch (error) {
      setState("Error");
      setTimeout(() => {
        eraseInfo();
      }, 3000);
    }
  };

  return (
    <DivPers>
      {/* Display component */}
      <DisplDiv>{state}</DisplDiv>

      {/* Keypad component */}
      <Keypad
  showInfo={showInfo}
  eraseInfo={eraseInfo}
  operations={evaluateOperations}
  saveInfo={saveInfo}
  showLocalSt={showLocalSt}
  clearLocalSt={clearLocalSt}
/>
    </DivPers>
  );
}

export default Calculator;
