import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { useContext, useState } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);
  return (
    <>
      <img src={cartIcon} alt="Cart" />
      {contextCartCount > 0 && (
        <div className="dsc-cart-count">{contextCartCount}</div>
      )}
    </>
  );
}
