// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleOnSubmit}>
         <label for="name">Band Name: </label>
         <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name} />
         <input type="submit"/>
       </form>
      </div>
    )
  }
}

export default BandInput
