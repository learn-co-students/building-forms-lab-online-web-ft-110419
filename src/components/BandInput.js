// Add BandInput component
import React, { Component } from 'react';
// import uuid from 'uuid';

class BandInput extends Component {

  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
          name="band"
          value={this.state.text}
          onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
