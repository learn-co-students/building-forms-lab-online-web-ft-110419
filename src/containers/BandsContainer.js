import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  render() {
    console.log(this.props.state.bands)
    console.log(this)
    return(
      <div>
        {<BandInput addBand={this.props.addBand}/>}
        <ul>
          {this.props.state.bands.map(band => {
            return (
            <li>{band.name}</li>
            )}
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => {
      dispatch({
        type: 'ADD_BAND',
        band
      })
    }
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(BandsContainer)

