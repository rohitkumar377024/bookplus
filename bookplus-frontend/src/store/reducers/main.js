const initialState = {
    accessToken: ''
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACCESS_TOKEN':
        return {
          ...state,
          accessToken: action?.payload,
        };
      default:
        return state;
    }
  };
  
  export default mainReducer;
  