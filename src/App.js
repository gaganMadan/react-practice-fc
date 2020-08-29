import React,  { useState } from "react";
import "./style.css";

let App = () =>  {
  const [ count, setCount ] = useState(0);
  var id = 100;

  const handleClick = (id) => {
    setCount(count +  1);
    console.log(id);
  }
      
  
  return (
    //{setCount({count: 1})}
   
    <div>
      <h1>Hello StackBlitz!{count}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={e => handleClick(id)}>Click</button>
    </div>
  );
}

export default App
