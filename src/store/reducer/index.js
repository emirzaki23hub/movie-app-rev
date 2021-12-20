export const initialState = {
  movies: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
