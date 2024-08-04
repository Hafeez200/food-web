import React from 'react';
import FoodMenu from './FoodMenu';
import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import momoImage from '../assets/memo.jpg';
import risotto from "../assets/risotto.jpg";
import pastaImage from '../assets/pasata.jpg'; 
import sandwichImage from '../assets/sandwich.jpg'; 

function FoodMenuList() {
  const foodNames = [
    { name: 'Pizza', image: pizzaImage, price: '18', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Burger', image: burgerImage, price: '10', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Momo', image: momoImage, price: '13', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Risotto', image: risotto, price: '11', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Pasta', image: pastaImage, price: '14', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." }, // New card
    { name: 'Sandwich', image: sandwichImage, price: '10', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." } // New card
  ];

  return <FoodMenu foodNames={foodNames} />;
}

export default FoodMenuList;