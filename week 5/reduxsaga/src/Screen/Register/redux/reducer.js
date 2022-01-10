const initialState = {
  username : '',
  email : '',
  phone : '',
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_REGISTER' : 
    return {
      ...state,
      ...action.payload
    }
    default:
      return state;
  }
};
export default RegisterReducer;
