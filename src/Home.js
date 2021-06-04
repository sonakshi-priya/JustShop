import React from "react";
import Product from "./Product";
import "./Home.css";

//https://aggie.io/rfr9rl8fr1

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="banneLlogo1.jpg" alt="" />
      <div className="home__row">
        <Product
          id="1"
          title="ABC"
          price={2000}
          rating={5}
          image="headphone.jpg"
        />

        <Product
          id="13"
          title="ABC"
          price={2000}
          rating={5}
          image="headphone.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="23"
          title="ABC"
          price={2000}
          rating={5}
          image="headphone.jpg"
        />
        {/*  */}
        <Product
          id="1234"
          title="ABC"
          price={2000}
          rating={5}
          image="headphone.jpg"
        />

        <Product
          id="133"
          title="ABC"
          price={2000}
          rating={5}
          image="headphone.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
