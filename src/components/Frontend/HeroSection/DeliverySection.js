import React from "react";

import delivery from "../../../assets/Img/delivery.png";
export default function DeliverySection() {
  return (
    <>
      <div className="rounded-pill d-flex px-2 justify-content-center align-items-center flex-row bg-delivery">
        <p className="m-2 fw-semibold">Bike Delivery</p>
        <img
          src={delivery}
          alt="delivery"
          className=" object-fit-contain bg-white rounded-circle mx-1 shadow-lg"
          style={{ height: "40px" }}
        />
      </div>
      <div className="text py-3  my-3">
        <p className="fw-bold display-1 lh-base  hero-section--text">
          The Fastest delivery in{" "}
          <span className=" text-secondary your-city my-1 d-block">
            Your City
          </span>
        </p>
        <p className="text-dark opacity-75 text-center text-lg-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos
          molestiae dolorum repellat, aut consequuntur. Voluptatum repudiandae
          ad eligendi maiores similique atque, molestias consequatur illum
          magnam, nam enim quis facilis!
        </p>
        <button className="btn btn-secondary text-white rounded-0 align-self-center hero-section-btn">
          Order Now
        </button>
      </div>
    </>
  );
}
