import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="main-div">
      <div className="cal-div">
        <div className="display">
          <div className="exp-display">123 + 73</div>
          <div className="output-display">196</div>
        </div>

        <div className="button-section">
          <table>
            <tbody>
              <tr>
                <td>
                  <Button>C</Button>
                </td>
                <td>
                  <Button>X</Button>
                </td>
                <td>
                  <Button>
                    <i className="fa-solid fa-divide"></i>
                  </Button>
                </td>
                <td>
                  <Button>
                    <i className="fa-solid fa-delete-left"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button>7</Button>
                </td>
                <td>
                  <Button>8</Button>
                </td>
                <td>
                  <Button>9</Button>
                </td>
                <td>
                  <Button>
                    <i className="fa-solid fa-minus"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button>4</Button>
                </td>
                <td>
                  <Button>5</Button>
                </td>
                <td>
                  <Button>6</Button>
                </td>
                <td>
                  <Button>+</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button>1</Button>
                </td>
                <td>
                  <Button>2</Button>
                </td>
                <td>
                  <Button>3</Button>
                </td>
                <td rowSpan="2">
                  <Button className="equals-btn">=</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button>%</Button>
                </td>
                <td>
                  <Button>0</Button>
                </td>
                <td>
                  <Button>.</Button>
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
