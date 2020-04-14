import React, { Component } from 'react'

class BandInput extends Component {
	state = {
		name: ""
	}

	handleChange = (event) => {
		this.setState({name: event.target.value})
	}

  	render() {
    	return(
      	<div>
        	<form onSubmit={(event) =>
              {event.preventDefault(); this.props.addBand(this.state.name); this.setState({name: ""})}}>
        		<label>Band Name:</label>
        		<input type="name" value={this.state.name} onChange={this.handleChange}/>
        		<input type="submit" value="Add Band" />
        	</form>
      	</div>
    )
  }
}

export default BandInput
