import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = () => {

const [bottles, setBottles] = useState([]);

const [cart, setCart] = useState([]);

      useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
      } , [])


        const handleAddToCart = bottle => {
            // console.log(bottle);
            const newCart = [...cart, bottle];
            setCart(newCart)
        }

    return (
        <div>
            <h2>Bottles Availble : {bottles.length} </h2>
            <h4>Cart : {cart.length} </h4>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                key={bottle.ids}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;