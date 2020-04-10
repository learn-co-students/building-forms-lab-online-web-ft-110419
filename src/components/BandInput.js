// Add BandInput component
import React, { Component } from 'react'
export default class BandInput extends Component {
  state = {
    name: "",
  }

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    let newBand = this.state
    this.props.addBand(newBand)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={e => this.handleOnChange(e)} />
          <input type="submit" onClick={e => this.handleOnSubmit(e)} />
        </form>
      </div>
    )
  }
}