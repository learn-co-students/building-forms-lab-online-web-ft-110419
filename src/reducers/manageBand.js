export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log("inside add band reducer")
      return {
        ...state,
        bands: [...state.bands, action.band]
      }

    default:
      return state
  }
};
