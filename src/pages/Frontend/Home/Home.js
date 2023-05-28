import React from "react";
import HeroSection from "../../../components/Frontend/HeroSection";
import FruitSection from "../../../components/Frontend/FruitSection";
import MenuSection from "../../../components/Frontend/MenuSection";
import CartContainer from "../../../components/Frontend/CartContainer";
import { useAuthContext } from "../../../context/AuthContext";

export default function Home() {
  const { state } = useAuthContext();
  const { cartShow } = state;
  // console.log(cartShow);
  return (
    <>
      <HeroSection />
      <FruitSection />
      <MenuSection />
      {cartShow && <CartContainer />}
    </>
  );
}
