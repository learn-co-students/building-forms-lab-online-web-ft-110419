import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
        { this.props.bands.map( band => {
            return <li>{band.name}</li>
          }) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bands: state.bands 
})

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({type: "ADD_BAND", name: name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)