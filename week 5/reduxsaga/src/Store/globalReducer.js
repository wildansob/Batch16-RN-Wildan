const initialState = {
  theme: 'light',
  loading: false,
  lang: 'en,',
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
export default globalReducer;
