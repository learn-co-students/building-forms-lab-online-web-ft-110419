import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Band:
          <input
            onChange={this.handleOnChange}
            type="text"
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default BandInput;
