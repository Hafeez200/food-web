import React from 'react';
import "./ExploreFood.css";
import pizzaImage from "../assets/pizza.jpg";
import burgerImage from '../assets/burger.jpg';
import momoImage from '../assets/memo.jpg';

function ExploreFood() {
  return (
    <div className='explore-foods'>
      <h1>Explore Foods</h1>
      <div className='food-card-container'>
        <div className="food-card food-card1">
          <img src={pizzaImage} alt="Pizza" />
          <p>Pizza</p>
        </div>
        <div className="food-card food-card2">
          <img src={burgerImage} alt="Burger" />
          <p>Burger</p>
        </div>
        <div className="food-card food-card3">
          <img src={momoImage} alt="Momo" />
          <p>Momo</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreFood;