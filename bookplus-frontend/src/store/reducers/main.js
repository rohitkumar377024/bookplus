const initialState = {
    accessToken: '',
    userID: ''
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACCESS_TOKEN':
        return {
          ...state,
          accessToken: action?.payload,
        };
      case 'SET_USER_ID':
        return {
          ...state,
          userID: action?.payload,
        };
      default:
        return state;
    }
  };
  
  export default mainReducer;
  