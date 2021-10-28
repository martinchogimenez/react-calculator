import React, {useState} from "react";
import Keypad from "./Keypad.js";
import Display from "./Display.js";
import styled from "styled-components";



//  Calculator styled component

const DivPers = styled.div`
    display:block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1px;
    padding-bottom:50px ;
    background-color: #41d44b;
    width: 400px;
    height: 360px;
    border-radius: 15px 15px 15px 15px; 
    `

function Calculator(){
    const [state, setState] = useState("");
      
    // This function shows the info in the display

    const showInfo=(click)=>{  
            let boton=click.target.name;
            setState(state+boton);
    };
    
    // This function shows the local storage content, when MEM button is clicked
    const showLocalSt=()=>{
        const s=window.localStorage.getItem("save");
        setState(s);
        if (s==null){
            setState("");
        }
    }

    // This function clears the local storage, when DEL button is clicked
    const clearLocalSt=()=>{  
        localStorage.clear();
        setState("");
    }

    // This function save info in local storage, when SAVE button is clicked
    const saveInfo=(click)=>{
        let boton=click.target.name;
        setState(state+boton);
        window.localStorage.setItem("save", state);
        setState("");
    }

    // This function erase the display when C button is clicked
     const eraseInfo=()=>{
        setState("");  
    }

    // This function evalues the operations and handles the errors
    const operations=(click)=>{
        setState("");
        try {
            if (eval(state)===Infinity){
                setState("Error division by zero");
                setTimeout(()=>{
                    eraseInfo()
                },3000);
            }
            else{
                setState(eval(state))
            }
        } catch (error) {
            setState("Error");
            setTimeout(()=>{
                eraseInfo()
            },3000);
        }
    }

    return(
        <DivPers>
        
        <Display> {state} </Display>
        
        <Keypad showInfo={showInfo} eraseInfo={eraseInfo} operations={operations} saveInfo={saveInfo} showLocalSt={showLocalSt} clearLocalSt={clearLocalSt}/>
        
        </DivPers>
       
    );
}

export default Calculator