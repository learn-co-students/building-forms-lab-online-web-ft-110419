import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';
import Band from '../components/Band'
class BandsContainer extends Component {
  render() {
    return(
      <div>
       
        
        < BandInput addBand={this.props.addBand}/>
        <ul>
        <ul>
          {this.props.bands.map((band, i) => (
            <Band key={i} band={band} />
          ))}
        </ul>
  
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    bands: state.bands
  }
}
const mapDispatchToProps = dispatch =>(
  {addBand: name => dispatch(addBand(name))}
)
const addBand = name =>{
  return {type: "ADD_BAND", band: name}
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
