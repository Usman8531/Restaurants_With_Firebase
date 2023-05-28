/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useAuthContext } from "../../../context/AuthContext";

export default function CartItems({ cartProducts }) {
  const { state, dispatch } = useAuthContext();
  const { user } = state;

  const [cartItems, setCartItems] = useState(cartProducts);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (savedCartItems.length > 0) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem("cartItems");
      dispatch({
        type: "SET_CART_ITEM",
        payload: [],
      });
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      dispatch({
        type: "SET_CART_ITEM",
        payload: cartItems,
      });
    }
  }, [cartItems]);

  const updateQty = (type, itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const newQty =
          type === "add"
            ? item.qty + 1
            : type === "remove"
            ? item.qty - 1
            : item.qty;
        const newTotal = newQty * item.price;
        if (newQty === 0) {
          // remove item from cart if quantity is zero
          return null;
        } else {
          // update item quantity and total
          return { ...item, qty: newQty, total: newTotal };
        }
      } else {
        return item;
      }
    });
    // remove null items from cartItems array
    const updatedCartItems = newCartItems.filter((item) => item !== null);
    setCartItems(updatedCartItems);
  };

  // const deleteItem = (itemId) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  //   setCartItems(updatedCartItems);
  // };

  const subTotal = cartItems.length
    ? cartItems.reduce((total, item) => {
        if (typeof item.total === "number") {
          return total + item.total;
        }
        return total;
      }, 0)
    : 0;
  const delivery = 2.4;
  const total = subTotal + delivery;

  const payment = () => {
    window.toastify("No payment Method is added", "alert");
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="text-secondary fs-5">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="overflow-y-scroll px-3 h-50 carousel--top d-flex flex-column gap-1">
            {cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-100 py-1 rounded-4 bg-black d-flex align-items-center mt-2 bg-opacity-25 justify-content-between"
                >
                  <img
                    src={item.imageUrl}
                    alt={"items"}
                    className="img-fluid object-fit-contain h-100 w-25"
                  />
                  <div className="d-flex flex-column px-1 justify-content-start">
                    <p className="text-center text-light mb-0">{item.title}</p>
                    <p className="text-center text-light fw-semibold">
                      <span className="text-secondary">$</span>
                      {item.price}
                    </p>
                  </div>

                  <div
                    className="d-flex btn-group align-items-center "
                    style={{ cursor: "pointer" }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.76 }}
                      className=""
                      onClick={() => updateQty("add", item.id)}
                    >
                      <BiPlus className="fs-3 text-light" />
                    </motion.div>
                    <p className="mb-0 text-light py-2 px-3 rounded-2 bg-dark">
                      {item.qty}
                    </p>
                    <motion.div
                      whileTap={{ scale: 0.76 }}
                      className=""
                      onClick={() => updateQty("remove", item.id)}
                    >
                      <BiMinus className="fs-3 text-light" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="py-4 h-50 bg-black w-100 rounded-bottom-5 px-4">
            <div className="d-flex justify-content-between">
              <p className="text-light">Sub Total</p>
              <p className="text-light">${subTotal.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-light">Delivery</p>
              <p className="text-light">${delivery.toFixed(2)}</p>
            </div>
            <hr className="border-light" />
            <div className="d-flex justify-content-between">
              <p className="text-light">Total</p>
              <p className="text-light">${total.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-center">
              {user ? (
                <button
                  className="btn btn-secondary w-75 text-white-50 rounded-4"
                  onClick={payment}
                >
                  Check Out
                </button>
              ) : (
                <button className="btn disabled btn-secondary w-75 text-white-50 rounded-4">
                  Login to Check Out
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
