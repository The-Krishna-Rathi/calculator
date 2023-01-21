import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import Evaluate from "./Postfix";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const removeLastChar = () => {
    const newExp = expression.slice(0, expression.length - 1);
    setExpression(newExp);
  };

  const evaluate = () => {
    setResult(Evaluate(expression));
    // setExpression("");
  };

  return (
    <div className="main-div">
      <div className="cal-div">
        <div className="display">
          <div className="exp-display">
            {expression === "" ? "0" : expression}
          </div>
          <div className="output-display">
            {result === "" ? expression : result}
          </div>
        </div>

        <div className="button-section">
          <table>
            <tbody>
              <tr>
                <td>
                  <Button
                    onClick={() => {
                      setExpression("");
                      setResult("");
                    }}
                  >
                    C
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + " * ")}>
                    X
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + " / ")}>
                    <i className="fa-solid fa-divide"></i>
                  </Button>
                </td>
                <td>
                  <Button onClick={removeLastChar}>
                    <i className="fa-solid fa-delete-left"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={() => setExpression(expression + "7")}>
                    7
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "8")}>
                    8
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "9")}>
                    9
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + " - ")}>
                    <i className="fa-solid fa-minus"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={() => setExpression(expression + "4")}>
                    4
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "5")}>
                    5
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "6")}>
                    6
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + " + ")}>
                    +
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={() => setExpression(expression + "1")}>
                    1
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "2")}>
                    2
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "3")}>
                    3
                  </Button>
                </td>
                <td rowSpan="2">
                  <Button className="equals-btn" onClick={evaluate}>
                    =
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={() => setExpression(expression + " % ")}>
                    %
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + "0")}>
                    0
                  </Button>
                </td>
                <td>
                  <Button onClick={() => setExpression(expression + ".")}>
                    .
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
