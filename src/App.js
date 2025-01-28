import './App.css';
import './logo.svg'
import React, { useState, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }

    switch (operation) {
      case "add":
        setResult((prevResult) => prevResult + inputValue);
        break;

      case "subtract":
        setResult((prevResult) => prevResult - inputValue);
        break;

      case "multiply":
        setResult((prevResult) => prevResult * inputValue);
        break;

      case "divide":
        if (inputValue === 0) {
          alert("Error: Division by zero is not allowed");
          return;
        }
        setResult((prevResult) => prevResult / inputValue);
        break;

      default:
        break;
    }

    inputRef.current.value = ""; 
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = ""; 
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0); 
  };

  return (
    <div className="App">
      <h1>Simplest Calculator</h1>
      <form style={{backgroundColor:"yellow"}}>
        <p>Current Result: {result}</p>
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <button onClick={handleOperation("add")}>Add</button>
        <button onClick={handleOperation("subtract")}>Subtract</button>
        <button onClick={handleOperation("multiply")}>Multiply</button>
        <button onClick={handleOperation("divide")}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Output</button>
      </form>
    </div>
  );
}

export default App;
