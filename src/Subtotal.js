import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }] = useStateValue();

  let total = 0;
  for (const product of basket) {
    total += product.price;
  }

  return (
    <div className="subtotal">
      <div className="subtotal__info">
        <h3>Subtotal &nbsp;</h3>
        <CurrencyFormat
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix="$"
        />
      </div>
      <button>Checkout &gt;</button>
    </div>
  );
}

export default Subtotal;
