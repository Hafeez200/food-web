import React from 'react';
import "./ExploreFood.css";
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import momo from '../assets/memo.jpg';

function ExploreFood() {
  return (
    <div className='explore-foods'>
      <h1>Explore Foods</h1>
      <div className='food-card-container'>
        <div className="food-card food-card1">
          <img src={pizza} alt="Pizza" />
          <p>Pizza</p>
        </div>
        <div className="food-card food-card2">
          <img src={burger} alt="Burger" />
          <p>Burger</p>
        </div>
        <div className="food-card food-card3">
          <img src={momo} alt="Momo" />
          <p>Momo</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreFood;