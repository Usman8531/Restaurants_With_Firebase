import React, { createContext, useContext, useReducer } from "react";
// importing reducer
import reducer from "./AuthReducer";
// importing user from local storage
import { fetchCart, fetchUser } from "../utils/FetchLocalStorage";
const user = fetchUser();
const cartInfo = fetchCart();
const initialValue = {
  isAuthenticated: false,
  user: user,
  cartShow: false,
  foodItems: null,
  cartProducts: cartInfo,
  cartItems: cartInfo,
};

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  // Check the user is loggedIn or not

  return (
    <>
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
