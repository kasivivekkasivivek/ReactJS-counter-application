import { Component } from "react";
import "./index.css";

class ClickCounter extends Component {
  state = {
    countValue: 0,
    decChangeColor: "normalColor",
    incChangeColor: "normalColor",
    resetChangeColor: "normalColor",
  };

  onClickDecrement = () => {
    this.setState((prevState) => ({ countValue: prevState.countValue - 1 }));
    this.onClickDecrementColor();
  };
  onClickDecrementColor = () => {
    this.setState({
      decChangeColor: "decNewColor",
      incChangeColor: "normalColor",
      resetChangeColor: "normalColor",
    });
  };

  onClickIncrement = () => {
    this.setState((prevState) => ({ countValue: prevState.countValue + 1 }));
    this.onClickIncrementColor();
  };
  onClickIncrementColor = () => {
    this.setState({
      incChangeColor: "incNewColor",
      decChangeColor: "normalColor",
      resetChangeColor: "normalColor",
    });
  };

  onClickReset = () => {
    this.setState((prevState) => ({ countValue: 0 }));
    this.onClickResetColor();
  };

  onClickResetColor = () => {
    this.setState({
      resetChangeColor: "resetNewColor",
      decChangeColor: "normalColor",
      incChangeColor: "normalColor",
    });
  };

  render() {
    const {
      countValue,
      decChangeColor,
      incChangeColor,
      resetChangeColor,
    } = this.state;
    let classColor = "black-color";
    if (countValue > 0) {
      classColor = "green-color";
    } else if (countValue < 0) {
      classColor = "red-color";
    }
    console.log(decChangeColor);
    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className={`value ${classColor}`}> {countValue} </h1>
          <div className="button-container">
            <button
              className={`${decChangeColor} inc-dec-button`}
              type="button"
              onClick={this.onClickDecrement}
            >
              Decrement
            </button>
            <button
              className={`${resetChangeColor} inc-dec-button`}
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
            <button
              className={`${incChangeColor} inc-dec-button`}
              type="button"
              onClick={this.onClickIncrement}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClickCounter;
