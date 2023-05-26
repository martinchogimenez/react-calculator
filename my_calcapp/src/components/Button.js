import React from "react";
import styled from "styled-components";

/**
 * Button styled component. Depends on props.name, height is set to 100px or 50px.
 */
const StyledButton = styled.button`
  display: block;
  width: 76px;
  font-size: 25px;
  height: ${props => (props.name === "+" || props.name === "equal" || props.name === "MEM" || props.name === "DEL") ? '100px' : '50px'};
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
