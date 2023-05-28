/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../../../assets/Img/NotFound.svg";
import { useAuthContext } from "../../../context/AuthContext";
export default function RowContainer({ flag, data, scrollValue }) {
  const { state, dispatch } = useAuthContext();

  // const [items, setItem] = useState();
  // console.log(data);
  const [cartItem, setCartProducts] = useState([]);

  const { cartProducts } = state;

  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartProducts.find((product) => product.id === item.id);

    if (existingItem) {
      // If the item already exists, show a notification and return
      window.toastify(`${item.title} is already added to cart`, "warning");
      return;
    }

    // If the item is not already in the cart, add it
    setCartProducts([...cartProducts, item]); // Update the local state of cartItem
    dispatch({
      type: "SET_CART_ITEM",
      payload: [...cartProducts, item], // Update the state of cartProducts in the reducer
    });
    window.toastify(`${item.title} added to cart`, "success");
    localStorage.setItem("cartItems", JSON.stringify([...cartProducts, item])); // Update the localStorage with the new cart items
  };

  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  useEffect(() => {
    if (flag) {
      const el = rowContainer.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }
  }, []);

  return (
    <>
      <div
        ref={rowContainer}
        className={`carousel--top container my-5 py-5  ${
          flag ? "overflow-x-scroll" : "flex-wrap overflow-x-hidden"
        }`}
      >
        <div
          className={`d-flex ${
            !data ? "justify-content-center w-100 " : "justify-content-center"
          } align-items-center gx-3  overflow-y-visible ${
            flag ? "" : "d-flex flex-wrap"
          }`}
        >
          {data && data.length > 0 ? (
            !data ? (
              <>
                <div className="cssload-thecube">
                  <div className="cssload-cube cssload-c1"></div>
                  <div className="cssload-cube cssload-c2"></div>
                  <div className="cssload-cube cssload-c4"></div>
                  <div className="cssload-cube cssload-c3"></div>
                </div>
              </>
            ) : (
              data.map((product, i) => {
                return (
                  <div
                    key={i}
                    className="col-md-4 mx-2 col-lg-3 my-3 bg-white shadow-lg col-8 rounded-4 overflow-y-visible"
                  >
                    <div className="d-flex justify-content-between align-items-center overflow-y-visible">
                      <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={product.imageUrl}
                        alt=""
                        className="w-50"
                        style={{
                          cursor: "pointer",
                          marginTop: "-50px",
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />
                      <motion.span
                        whileTap={{ scale: 0.75 }}
                        className="rounded-circle bg-danger p-1 btn d-inline my-3"
                        onClick={() => {
                          return addToCart(product);
                        }}
                      >
                        <MdShoppingBasket className="fs-3 text-white" />
                      </motion.span>
                    </div>
                    <div className="w-100 d-flex justify-content-end align-items-end flex-column pe-3">
                      <p className="fw-semibold fs-5">{product.title}</p>
                      <p className="text-dark-50 opacity-75">
                        <span>calories</span> {product.calories}{" "}
                      </p>
                      <p className="fw-bold">
                        <span className="text-secondary">$</span>{" "}
                        {product.price}
                      </p>
                    </div>
                  </div>
                );
              })
            )
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
              </div>
              <img src={NotFound} className="img-fluid" alt="" />
              <p className="text-semibold">No items Available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
