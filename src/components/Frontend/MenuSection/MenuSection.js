import React, { useEffect, useRef, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { categories } from "../../../utils/data";
import { motion } from "framer-motion";
import RowContainer from "../FruitSection/RowContainer";
import { useAuthContext } from "../../../context/AuthContext";

export default function MenuSection() {
  const { state } = useAuthContext();
  const { foodItems } = state;
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
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
  }, []);

  // filter the products
  const [filter, setFilter] = useState("Chicken");
  useEffect(() => {}, [filter]);

  // get data
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="h2 text-capitalize fw-semibold fs-2">
              Our Hot Dishes
              <p className="divider food-section--heading my-3 rounded-4"></p>
            </h2>
          </div>
          <div
            ref={elRef}
            className="col-12 carousel--top py-3 flex-nowrap d-flex justify-content-lg-center overflow-x-scroll w-100"
            // style={{}}
          >
            {categories &&
              categories.map((items, i) => {
                return (
                  <motion.div
                    whileTap={{ scale: "0.95", ease: "linear", duration: 2 }}
                    key={i}
                    className={`${
                      filter === items.urlParamName ? "card bg-danger" : "card"
                    } border-0 me-2 col-lg-1 col-md-2 col-3  rounded-3 d-flex menu-card justify-content-center align-items-center shadow-lg py-2 `}
                    onClick={() => setFilter(items.urlParamName)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className={`rounded-circle shadow-lg p-3 menu-card--content mt-2 ${
                        filter === items.urlParamName
                          ? "bg-white text-dark"
                          : "bg-danger"
                      } `}
                    >
                      <MdFastfood
                        className={`fs-3  icons-text shadow ${
                          filter === items.urlParamName
                            ? "text-dark"
                            : "text-white"
                        } `}
                      />
                    </div>
                    <p
                      className={`opacity-75 mt-3 ${
                        filter === items.urlParamName
                          ? "text-white"
                          : "text-dark"
                      }`}
                    >
                      {items.name}
                    </p>
                  </motion.div>
                );
              })}
          </div>
          <RowContainer
            flag={false}
            data={foodItems?.filter((items) => items.category === filter)}
          />
        </div>
      </div>
    </>
  );
}
