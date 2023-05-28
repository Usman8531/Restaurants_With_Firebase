import React from "react";
// icons
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiPlus, BiMinus } from "react-icons/bi";
// farmer motion
import { motion } from "framer-motion";

// img
import emptyCart from "../../../assets/Img/emptyCart.svg";
import { useAuthContext } from "../../../context/AuthContext";
import CartItems from "./CartItems";

export default function CartContainer() {
  const { state, dispatch } = useAuthContext();
  const { cartShow, cartProducts, user } = state;
  const showingCart = () => {
    dispatch({
      type: "SET_CART_SHOW",
      payload: !cartShow,
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    dispatch({
      type: "SET_CART_ITEM",
      payload: [],
    });
  };
  // console.log(cartProducts);
  return (
    <>
      <div className="container-fluid me-0 pe-0">
        <div className="row me-auto d-flex flex-column justify-content-end align-items-end ">
          <motion.div
            className="col-lg-3 col-md-5  col-sm-7 col-11 offset-1 position-fixed top-0 h-100 card m-0 p-0 rounded-bottom-5 shadow-lg cart--card"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <div
              style={{ cursor: "pointer" }}
              className="w-100 d-flex justify-content-between align-items-center my-3 px-3"
            >
              <motion.p
                whileTap={{ scale: 0.76 }}
                className=""
                onClick={showingCart}
              >
                <MdOutlineKeyboardBackspace className="fs-3 text-dark opacity-75" />
              </motion.p>
              <p className="fs-5 text-dark opacity-75 fw-semibold">Cart</p>
              <motion.p
                whileTap={{ scale: 0.75 }}
                className="fs-5 text-dark shadow-lg p-1 "
                onClick={clearCart}
                style={{ backgroundColor: "#e5e5e5" }}
              >
                clear <RiRefreshFill />
              </motion.p>
            </div>
            {/* bottom section */}
            <div
              className={`w-100 rounded-top-5  h-100 ${
                cartProducts.length > 0 ? "bg-dark" : "bg-light"
              }`}
            >
              {cartProducts && cartProducts.length > 0 ? (
                <>
                  <CartItems cartProducts={cartProducts} />
                </>
              ) : (
                <>
                  <div className="mx-4 h-100 flex-column d-flex justify-content-center align-items-center">
                    <img src={emptyCart} className="img-fluid" alt="" />
                    <p className="text-center mb-0 my-3 fw-bolder">
                      Add Some Items to Your Cart
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
