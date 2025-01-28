import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Cart =(props)=>{
   const item =useContext(CartContext);
   const total= item.cart.reduce((acc,curr)=>acc+curr.price,0);
    return(
        <div className="cart">

            <h1>Cart</h1>
            {
                item && item.cart.map((item)=><li>{item.name} - {item.price}$</li>)
            }

            <h4>total Price: {total}$</h4>
        </div>
    );
};
export default Cart;