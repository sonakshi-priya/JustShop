import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img className="checkout__ad" src="logo.JPG" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your basket is empty.</h2>
        </div>
      ) : (
        <div>
          <div className="checkout__info">
            <h2 className="checkout__title">Your Shopping basket.</h2>
            <Subtotal />
          </div>
          {/* List out all of the checkout product */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
