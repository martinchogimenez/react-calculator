import React from "react";
import Button from "./Button";

/**
 * Keypad component. It component calls Button component and sends it the "name" prop.
 */
function Keypad(props) {
  const clearArray = [
    { name: 'clear', onClick: props.eraseInfo, value: "C" },
    { name: "7", onClick: props.showInfo, value: "7" },
    { name: "4", onClick: props.showInfo, value: "4" },
    { name: "1", onClick: props.showInfo, value: "1" },
    { name: "0", onClick: props.showInfo, value: "0" },
  ];

  const divideArray = [
    { name: '/', onClick: props.showInfo, value: "/" },
    { name: "8", onClick: props.showInfo, value: "8" },
    { name: "5", onClick: props.showInfo, value: "5" },
    { name: "2", onClick: props.showInfo, value: "2" },
    { name: ".", onClick: props.showInfo, value: "." },
  ];

  const multiplyArray = [
    { name: '*', onClick: props.showInfo, value: "x" },
    { name: "9", onClick: props.showInfo, value: "9" },
    { name: "6", onClick: props.showInfo, value: "6" },
    { name: "3", onClick: props.showInfo, value: "3" },
    { name: " ", onClick: props.showInfo, value: " " },
  ];

  const subtractArray = [
    { name: '-', onClick: props.showInfo, value: "-" },
    { name: "+", onClick: props.showInfo, value: "+" },
    { name: "equal", onClick: props.operations, value: "=" },
  ];

  const extraArray = [
    { name: 'SAVE', onClick: props.saveInfo, value: "SAVE" },
    { name: "MEM", onClick: props.showLocalSt, value: "MEM" },
    { name: "DEL", onClick: props.clearLocalSt, value: "DEL" },
  ];

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {clearArray.map((element, index) => (
                <Button key={index} onClick={element.onClick} name={element.name}>
                  {element.value}
                </Button>
              ))}
            </td>
            <td>
              {divideArray.map((element, index) => (
                <Button key={index} onClick={element.onClick} name={element.name}>
                  {element.value}
                </Button>
              ))}
            </td>
            <td>
              {multiplyArray.map((element, index) => (
                <Button key={index} onClick={element.onClick} name={element.name}>
                  {element.value}
                </Button>
              ))}
            </td>
            <td>
              {subtractArray.map((element, index) => (
                <Button key={index} onClick={element.onClick} name={element.name}>
                  {element.value}
                </Button>
              ))}
            </td>
            <td>
              {extraArray.map((element, index) => (
                <Button key={index} onClick={element.onClick} name={element.name}>
                  {element.value}
                </Button>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Keypad;
