import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/actions.js';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>{this.props.bands.map(band => <li>{band.name}</li>)}</ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }

}

export default connect(state => ({bands: state.bands}), { addBand })(BandsContainer)
