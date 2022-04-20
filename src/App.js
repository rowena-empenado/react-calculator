import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("RESULT");

  const handleAdd = () => {
    let total = parseFloat(firstNum) + parseFloat(secondNum);
    setResult(total);
  };

  const handleSubtract = () => {
    let difference = parseFloat(firstNum) - parseFloat(secondNum);
    setResult(difference);
  };

  const handleMultiply = () => {
    let product = parseFloat(firstNum) * parseFloat(secondNum);
    setResult(product);
  };

  const handleDivide = () => {
    let quotient = parseFloat(firstNum) / parseFloat(secondNum);
    setResult(quotient);
  };

  const handleClear = () => {
    setFirstNum("");
    setSecondNum("");
    setResult("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="calc-body">
          <div className="result-header">
            <div id="result" className="result">
              {result}
            </div>
          </div>
          <div className="group">
            <input
              id="firstNum"
              className="input"
              type="number"
              value={firstNum}
              onChange={(e) => setFirstNum(e.target.value)}
              placeholder="1st Number"
            ></input>
            <input
              id="secondNum"
              className="input"
              type="number"
              value={secondNum}
              onChange={(e) => setSecondNum(e.target.value)}
              placeholder="2nd Number"
            ></input>
          </div>
          <div>
            <div className="group">
              <button id="add" className="operators" onClick={handleAdd}>
                +
              </button>
              <button
                id="subtract"
                className="operators"
                onClick={handleSubtract}
              >
                -
              </button>
              <button
                id="multiply"
                className="operators"
                onClick={handleMultiply}
              >
                *
              </button>
              <button id="divide" className="operators" onClick={handleDivide}>
                /
              </button>
            </div>
            <div>
              <button id="clear" className="" onClick={handleClear}>
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
