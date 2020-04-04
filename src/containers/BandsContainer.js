import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import {connect} from 'react-redux';
import { addBand } from '../actions/bands';


class BandsContainer extends Component {

  showBands = () => {
    console.log(this.props.bands)
  return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  }


  render() {
    console.log(this.props)
    debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
    <ul>{this.showBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => {
  debugger
  return { bands }
}

// const mapDispatchToProps = dispatch => {
//   debugger
//   return {
//     addBand: band => dispatch({ type: "ADD_BAND", band })
//   };
// };

//instead of the {addBand} action, I could have just written this dispatch function and passed it in as the second argument of connect

export default connect(mapStateToProps, {addBand} )(BandsContainer);