export default function manageBand(state = {
  bands: [],
}, action) {
  switch ( action.type ) {
    case "ADD_BAND": 
    debugger
      return Object.assign({}, {
        bands: state.bands.concat(action.name)
      })
    default: 
      return state
  }
};
