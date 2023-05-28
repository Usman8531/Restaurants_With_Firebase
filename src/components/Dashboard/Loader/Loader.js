import React from "react";

export default function Loader() {
  return (
    <>
      <div className=" ">
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
