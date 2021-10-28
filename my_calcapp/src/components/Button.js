import styled from "styled-components";

/**
 * Button styled component. Depends on props.name, heigth is settled to 100 or 50 px
 * 
 */
const Button = styled.button`
		display: block;
		width: 76px;
		font-size: 25px;
		${props => (props.name==="+" || props.name === "equal" || props.name === "MEM" || props.name === "DEL") ? 'height: 100px': 'height: 50px'};	
 		`

export default Button