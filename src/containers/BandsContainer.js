import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import Band from "../components/Band";

class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props;
    return (
      <div>
        <BandInput addBand={addBand} />
        <ul>
          {bands.map((band, i) => (
            <Band key={i} band={band} />
          ))}
        </ul>
      </div>
    );
  }
}

const myState = ({ bands }) => {
  return {
    bands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", payload: band })
  };
};

export default connect(myState, mapDispatchToProps)(BandsContainer);
