import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute({ Component }) {
  const navigate = useNavigate();
  const { state } = useAuthContext();
  const { user } = state;
  if (user && user.email === "mu1363131@gmail.com") {
    return <Component />;
  }
  return (
    <>
      {/* <Frontend /> */}
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <h1 className="text-danger">Not Authorized</h1>
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
