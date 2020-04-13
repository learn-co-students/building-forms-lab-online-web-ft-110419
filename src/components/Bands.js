import React from 'react';

const Bands = props => {
  return (
    <div>
      {props.bands.map(band => <li>{band.name}</li>)}
    </div>
  );
}

export default Bands;