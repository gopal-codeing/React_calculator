import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import  "./Button.css"

function App() {

  const [calval ,setCal] = useState("");

  const onbutton= (buttonText) =>{

      if(buttonText === 'c'){
        setCal("");
      }else if(buttonText === '='){
        const results = eval(calval);
          setCal(results);
      }else{
        const newValue = calval + buttonText; 
        setCal(newValue); 
      }
  
  }
  
  
  return (
       <>
         <div className="calculator">
          <h2 style={{textAlign:"center"}}>calculator</h2>
         <Display dispalyvalue = {calval} ></Display>
        <Button onbutton={onbutton}></Button>
        </div>
       </>
  );
}

export default App;
