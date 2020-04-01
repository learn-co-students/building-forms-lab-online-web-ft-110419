import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this)
    event.preventDefault()
    let band = {name: this.state.name}
    this.props.addBand(band)
    this.setState({
      name: ''
    })
  }

  render() {
    console.log(this.props)
    return(
      <div onSubmit={this.handleSubmit}>
      {/* <div onSubmit={event => this.props.addBand({name: this.state.name})}> */}

        <form>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return { state }
// }

// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch)
//   return {
//     addBand: (band) => {
//       dispatch(this.props.addBand(band))
//     }
//   }
// }

export default BandInput
