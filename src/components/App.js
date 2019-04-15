import React, { Component } from "react";
import "../style/App.scss";

class App extends Component {
  state = {
    name: "",
    email: "",
    isChecked: false,
    selectedOption: "small",
    paymentMethod: "noPaymentMethod",
    text: ""
  };

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleCheckbox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>React Boilerplate</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
            <br />
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={this.handleCheckbox}
              defaultChecked={this.state.isChecked}
            />
            Newsletter
            <br />
            <label htmlFor="radioOption1">
              <input
                type="radio"
                name="selectedOption"
                id="radioOption1"
                value="small"
                checked={this.state.selectedOption === "small"}
                onChange={this.handleInput}
              />
              Option1 - small
            </label>
            <br />
            <label htmlFor="radioOption2">
              <input
                type="radio"
                name="selectedOption"
                id="radioOption2"
                value="big"
                checked={this.state.selectedOption === "big"}
                onChange={this.handleInput}
              />
              Option2 - big
            </label>
            <br />
            <label htmlFor="paymentMethod">
              Payment method: {this.state.paymentMethod}
            </label>
            <br />
            <select
              name="paymentMethod"
              id="paymentMethod"
              value={this.state.paymentMethod}
              onChange={this.handleInput}
            >
              <option value="noPaymentMethod">Select payment method</option>
              <option value="creditCard">Credit card</option>
              <option value="bankTransfer">Bank transfer</option>
            </select>
            <br />
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              onChange={this.handleInput}
            />
          </div>
          <button
            type="submit"
            disabled={this.state.paymentMethod === "noPaymentMethod"}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
