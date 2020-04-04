// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  controlInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.props.addBand(this.state.name, e)}>
          <input
            type='text'
            name='name'
            onChange={this.controlInput}
            value={this.state.name}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
