
const initState = {
  bands: []
};

export default function manageBand(state = initState, action) {
  switch (action.type) {
    case "ADD_BAND":
      return Object.assign({}, {
        bands: state.bands.concat(action.name)
      })
    default: 
      return state
  }
};
