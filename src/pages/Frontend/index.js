import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

// pages

// components

import Navbar from "../../components/Frontend/Navbar";
import Footer from "../../components/Frontend/Footer";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
export default function index() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
