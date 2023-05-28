/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import icons
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdBasket } from "react-icons/io";
import { MdAdd, MdLogout } from "react-icons/md";

// Motion
import { motion } from "framer-motion";

// logo
import logo from "../../../assets/Img/logo.png";
import avatar from "../../../assets/Img/avatar.png";

// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { app } from "../../../config/firebase.config";
import { useAuthContext } from "../../../context/AuthContext";
// import FoodItemContextProvider from "../../../context/FoodItemContext";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export default function Navbar() {
  const { state, dispatch } = useAuthContext();
  const { user, cartShow, cartProducts } = state;

  // console.log(cartProducts.length);
  // dropdown if user id logged in

  const [toggle, setToggle] = useState(false);
  // login the user
  const login = async () => {
    if (!state.user) {
      await signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          dispatch({ type: "LOGIN", payload: user });
          window.toastify("Login successfully", "success");
          localStorage.setItem("user", JSON.stringify(user.providerData[0]));
        })
        .catch((error) => {
          window.toastify(error.message, "error");
        });
    } else {
      setToggle(!toggle);
    }
    // console.log(user);
  };

  // sign out
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    window.toastify("Logout successfully", "success");
    setToggle(false);
  };

  // show cart
  const showingCart = () => {
    dispatch({
      type: "SET_CART_SHOW",
      payload: !cartShow,
    });
    window.toastify("Cart opened", "success");
    // console.log(cartShow);
  };
  // showingCart();
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img src={logo} alt="logo" className="img-fluid navbar--logo" />
              <span className="h2 fw-bold">City</span>
            </Link>
            <motion.li
              whileHover={{ scale: [null, 1.1, 1.1] }}
              transition={{ duration: 0.2 }}
              className=" position-relative nav-item d-md-block d-lg-none text-decoration-none list-unstyled ms-auto me-md-5 me-3"
              style={{ color: "#6c757d" }}
            >
              <Link
                className="nav-link position-relative"
                onClick={showingCart}
              >
                <IoMdBasket className="fs-3" />
                {cartProducts && cartProducts.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                    {cartProducts.length}
                  </span>
                )}
              </Link>
            </motion.li>
            <button
              className="navbar-toggler border-0 outline-0 shadow"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <RiMenu3Fill />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0 d-flex justify-content-center align-items-center">
                <motion.li
                  className="nav-item"
                  onClick={() => setToggle(false)}
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.2 }}
                >
                  <Link className="nav-link mx-4" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.2 }}
                  className="nav-item"
                  onClick={() => setToggle(false)}
                >
                  <a className="nav-link mx-4" href="#menu">
                    Menu
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.2 }}
                  className="nav-item"
                  onClick={() => setToggle(false)}
                >
                  {/* here */}
                  <a className="nav-link mx-4" href="#services">
                    Services
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.2 }}
                  className="nav-item"
                  onClick={() => setToggle(false)}
                >
                  <a className="nav-link mx-4" href="#aboutUS">
                    About Us
                  </a>
                </motion.li>

                <motion.li
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.2 }}
                  className=" position-relative nav-item d-none d-lg-block"
                  onClick={showingCart}
                  style={{ color: "#6c757d", cursor: "pointer" }}
                >
                  <p
                    className="nav-link position-relative"
                    onClick={() => setToggle(false)}
                  >
                    <IoMdBasket className="fs-3" />
                    {cartProducts && cartProducts.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                        {cartProducts.length}
                      </span>
                    )}
                  </p>
                </motion.li>
              </ul>
              <div className=" mx-5 position-relative">
                <motion.img
                  onClick={login}
                  // whileHover={{ scale: [null, 1, 1.1] }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  alt="user"
                  src={!user ? avatar : user.photoURL}
                  className="navbar--avatar shadow rounded-circle "
                />
                {toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.1 }}
                    className="position-absolute bg-light shadow-lg rounded-2 my-3 py-2"
                    style={{ width: 140, top: 45, left: -50, zIndex: 5 }}
                    type="button"
                  >
                    {user && user.email === "mu1363131@gmail.com" && (
                      <Link
                        // onClick={setToggle(false)}
                        to={"/dashboard"}
                        className="text-decoration-none"
                        onClick={() =>
                          setToggle(false) ||
                          window.toastify("Dashboard", "success")
                        }
                      >
                        <p className="mb-0 px-2 my-1 table-hover">
                          Add item
                          <MdAdd />
                        </p>
                      </Link>
                    )}
                    {/* <hr /> */}
                    <p
                      className="mb-0 px-2 table-hover my-1"
                      type="button"
                      onClick={logout}
                    >
                      Logout <MdLogout />
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
