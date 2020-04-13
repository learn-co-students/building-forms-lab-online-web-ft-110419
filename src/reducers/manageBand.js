export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      const bands = state.bands.concat(action.band)
      return { ...state, bands }
    default:
      return state
  }

};
