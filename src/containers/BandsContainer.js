import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import {connect} from 'react-redux'

class BandsContainer extends Component {

	handleSubmit = (bandName) => {
		this.props.addBand(bandName)
	}

  	render() {
    	return(
      		<div>
        		< BandInput addBand = {this.handleSubmit} />
        		{this.props.bands.map(band => {return (<li>{band.name}</li>)})}
      		</div>
    	)
  	}
}

const mapDispatchToProps = (dispatch) => {
	return {addBand: bandName => dispatch({type: 'ADD_BAND', name: bandName})}
}

const mapStateToProps = (state) => {
	return {bands: state.bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
