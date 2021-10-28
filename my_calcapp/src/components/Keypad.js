import React from "react";
import Button from "./Button";


/**
 * 
 * Keypad component. It component calls Button component and send it "name" props 
 * 
 */
function Keypad(props){    
    const array = [
                    {name: 'clear', onclick: props.eraseInfo, value: "C"},
                    {name: "7", onclick: props.showInfo, value: "7"},
                    {name: "4", onclick: props.showInfo, value: "4"},
                    {name: "1", onclick: props.showInfo, value: "1"},
                    {name: "0", onclick: props.showInfo, value: "0"},
                    ]

    const arrayb = [
                    {name: '/', onclick: props.showInfo, value: "/"},
                    {name: "8", onclick: props.showInfo, value: "8"},
                    {name: "5", onclick: props.showInfo, value: "5"},
                    {name: "2", onclick: props.showInfo, value: "2"},
                    {name: ".", onclick: props.showInfo, value: "."},
                    ]

    const arrayc = [
                    {name: '*', onclick: props.showInfo, value: "x"},
                    {name: "9", onclick: props.showInfo, value: "9"},
                    {name: "6", onclick: props.showInfo, value: "6"},
                    {name: "3", onclick: props.showInfo, value: "3"},
                    {name: " ", onclick: props.showInfo, value: " "},
                    ]

    const arrayd = [
                    {name: '-', onclick: props.showInfo, value: "-"},
                    {name: "+", onclick: props.showInfo, value: "+"},
                    {name: "equal", onclick: props.operations, value: "="},
                    ]

    const arraye = [
                    {name: 'SAVE', onclick: props.saveInfo, value: "SAVE"},
                    {name: "MEM", onclick: props.showLocalSt, value: "MEM"},
                    {name: "DEL", onclick: props.clearLocalSt, value: "DEL"},
                    ]

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td >
                            {array.map((element, name) => {
                                return <Button key={name} onClick={element.onclick} name={element.name}>{element.value}</Button>
                            })}
                        
                        </td>
                        <td>
                            {arrayb.map((element, name) => {
                                return <Button key={name} onClick={element.onclick} name={element.name}>{element.value}</Button>
                            })}
                        </td>
                        <td>
                            {arrayc.map((element, name) => {
                                return <Button key={name} onClick={element.onclick} name={element.name}>{element.value}</Button>
                            })}
                        </td>
                        <td>
                            {arrayd.map((element, name) => {
                                return <Button key={name} onClick={element.onclick} name={element.name}>{element.value}</Button>
                            })}
                        </td>
                        <td>
                            {arraye.map((element, name) => {
                                return <Button key={name} onClick={element.onclick} name={element.name}>{element.value}</Button>
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Keypad