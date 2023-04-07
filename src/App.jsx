import { useState } from "react";
import "./App.css";
function Counter() {
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState("");

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleUpdateFactor = (e) => {
    setFactor(e.target.valueAsNumber);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setFactor(""); // remove the value in input as well as reset the value to 0
    setCount(0);
  };
  const handleCountValue = () => {
    setCount((value) => value + factor);
  };
  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>[built using ReactJs]</p>
      <h1 className={count > 0 ? "green" : count < 0 ? "red" : null}>
        {count}
      </h1>
      <button className="dec" onClick={handleDecrement}>
        -Decrement
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <button className="inc" onClick={handleIncrement}>
        +Increment
      </button>
      <input
        type="number"
        placeholder="Enter a number"
        value={factor}
        onChange={handleUpdateFactor}
      />
      <button className="updateBy" onClick={handleCountValue}>
        Update by {isNaN(factor) ? "" : factor}
      </button>
    </div>
  );
}
export default Counter;

// props have read only property
// props are used only to pass the data from parent to child component
// If we have to change the data, user interactivity, handleEvent then we have to use "state" of reactJs
// "state" are the react object used to handle user interactivity

// Answers of Questions asked in ReactJs
/* 
1. Named and Default export: 
--> Named export is when we tries to
export function without using "default export <functionName>".
So, in that case a same exact name(i.e import {funcName} from "./App";) of function should be used in
order to import it.
However, in default export function could be exported via any name 
in index.js file.

2. Difference b/w regular Js function & React component: Regular js function name can begin with capital
leters but react component name should begin with uppercase

3. Difference b/w props & states: 
--> props is the "read only data" passed as argument from parent to 
child component in reactJs; so data is not modified here using props. 
--> Whereas, states is the data which be updated and passed from parent to child component 
*/
