import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Item =(props)=>{
    const item =useContext(CartContext);
    
    return(
        <div className='itrm-card'>
            <h4>{props.name}  </h4>
            <p>Price: {props.price}$</p>
            <button onClick={()=>{item.setcart([...item.cart,{name :props.name,price :props.price}])}}>Add to Cart</button>
        </div>
    );
}
export default Item;