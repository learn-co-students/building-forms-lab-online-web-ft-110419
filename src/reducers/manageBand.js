const initState = {
  bands: []
};

export default function manageBand(state = initState, action) {
  switch (action.type) {
    case "ADD_BAND":
      return { ...state, bands: [...state.bands, action.payload] };

    default:
      return state;
  }
}
