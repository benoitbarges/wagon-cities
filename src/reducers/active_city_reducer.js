const activeCityReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return null;
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
