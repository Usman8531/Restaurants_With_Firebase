const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "SET_FOOD_ITEMS":
      return {
        ...state,
        foodItems: action.payload,
      };
    case "SET_CART_SHOW":
      return {
        ...state,
        cartShow: action.payload,
      };
    case "SET_CART_ITEM":
      return {
        ...state,
        cartProducts: action.payload,
        
      };
    default:
      // Return the previous state if the action type is not recognized
      return state;
  }
};

export default Reducer;
