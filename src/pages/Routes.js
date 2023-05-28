/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing components
import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import PrivateRoute from "../private/PrivateRoute";

// importing data from firestore
import { getData } from "../config/firebase.config";
import { useAuthContext } from "../context/AuthContext";
export default function Index() {
  const { state, dispatch } = useAuthContext();
  // fetching all data from fireStore
  const fetchAllItems = async () => {
    await getData().then((data) => {
      // console.log(data);
      dispatch({
        type: "SET_FOOD_ITEMS",
        payload: data,
      });
    });
  };
  useEffect(() => {
    fetchAllItems();
  }, []);
  return (
    <>
      <BrowserRouter exitBeforeEnter>
        <Routes>
          <Route path="/*" element={<Frontend />} />
          <Route path="auth/*" element={<Auth />} />
          <Route
            path="dashboard/*"
            element={<PrivateRoute Component={Dashboard} />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
