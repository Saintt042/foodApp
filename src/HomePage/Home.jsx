import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { photos } from "../Carousel/Images";
import { Container } from "./HomeStyle";

const Home = () => {
  return (
    <Container>
        <Carousel pictures={ photos }/>
      <div className="homelayout">
        <div className="welcome">
          <h1>
            Welcome to <span> Zubis </span> Restaurant
          </h1>
          <p>
            {" "}
            People eat with their eyes and Zubis creates an easy way for
            customers to order when they can see beautiful photos of your food{" "}
          </p>
        </div>
        <div className="btn">
          <ul>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>

            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home;
