import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Frontend/Navbar";
import DashboardHome from "./DashboardHome";

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
        </Routes>
      </main>
    </>
  );
}
