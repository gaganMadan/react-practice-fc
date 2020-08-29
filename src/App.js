import React,  { useState } from "react";
import "./style.css";
import Child from './Child';

const App = () =>  {
  const [ count, setCount ] = useState(0);
  var id = 100;

  const handleClick = (id) => {
    setCount(count +  1);
    console.log(id);
  }
      
  console.log('Parent Component');
  return (
    //{setCount({count: 1})}
   
    <div>
      <h1>Hello StackBlitz!{count}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={e => handleClick(id)}>Click</button>
      <Child obj={count}/>
    </div>
  );
}

export default App
