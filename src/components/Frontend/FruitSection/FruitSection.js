/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAuthContext } from "../../../context/AuthContext";
// import { img } from "../../../assets/Img/r1.png";
import RowContainer from "./RowContainer";

// loader
export default function FruitSection() {
  const { state, dispatch } = useAuthContext();
  const { foodItems } = state;
  // console.log(foodItems);
  // scrolling
  const [scrollValue, setScroll] = useState(0);
  useEffect(() => {}, [scrollValue]);

  const ref = useRef(null);

  return (
    <>
      <section className="my-5" id="menu">
        <div className="container py-5">
          <div className="row">
            <div className="col-8">
              <h2 className="h2 text-capitalize fw-semibold fs-2">
                Our Fresh & healthy fruits
                <p className="divider food-section--heading my-3 rounded-4"></p>
              </h2>
            </div>
            <div className="col-4 text-end d-none d-md-block">
              <motion.div
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
                whileTap={{ scale: 0.75 }}
                onClick={() => setScroll(-400)}
                className="rounded btn btn-sm btn-secondary rounded-pill p-1 mx-3"
              >
                <MdChevronLeft className="text-white fs-3" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
                onClick={() => setScroll(400)}
                className="rounded btn btn-sm btn-secondary rounded-pill p-1"
              >
                <MdChevronRight
                  aria-hidden="true"
                  className="text-white fs-3"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter((items) => items.category === "Fruits")}
          dispatch={dispatch}
          scrollValue={scrollValue}
        />
      </section>
    </>
  );
}
