import React from "react";
import DeliverySection from "./DeliverySection";

// importing hero section img
import HeroBg from "../../../assets/Img/heroBg.png";
// import icecream from "../../../assets/Img/i1.png";
import { heroData } from "../../../utils/data";
export default function HeroSection() {
  return (
    <>
      <section className="container py-3" id="home">
        <div className="row">
          <div
            id="home"
            className="col-lg-6 col-12 d-flex justify-content-start align-items-start flex-column"
          >
            <DeliverySection />
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="position-relative d-flex justify-content-center align-items-center ">
              <img
                src={HeroBg}
                alt=""
                className="object-fit-contain hero-section--img align-self-end ms-lg-auto"
                // style={{ minHeight: "70vh" }}
              />
              <div className="position-absolute align-items-center d-flex justify-content-center row  flex-wrap h-100 w-100 ">
                {heroData &&
                  heroData.map((item) => {
                    return (
                      <div
                        className="bg-light col-5  col-lg-5 my-2 shadow-lg mx-2 bg-opacity-75 rounded object-fit-contain hero-section--cards text-center"
                        key={item.id}
                      >
                        <img
                          src={item.img}
                          alt="img"
                          className="img-fluid"
                          style={{ marginTop: "-20%", height: "100px" }}
                        />
                        <p className="fw-semibold  card-text--hero---section">
                          {item.name}
                        </p>
                        <p className="fw-semibold opacity-75 card-text--hero---section">
                          {item.desc}
                        </p>
                        <p className="fw-semibold fs-6 opacity-75 card-text--hero---section">
                          <span className="text-secondary">$ </span>
                          {item.price}
                        </p>
                      </div>
                    );
                  })}
                {/* <div className="bg-light col-md-5 col-5 rounded opacity-75 p-5 hero-section--cards mx-1"></div>
                <div className="bg-light col-md-5 col-5 rounded opacity-75 p-5 hero-section--cards "></div>
                <div className="bg-light col-md-5 col-5 rounded opacity-75 p-5 hero-section--cards mx-1 d-sm-block d-none"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
