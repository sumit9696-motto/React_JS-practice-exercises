import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

export const CartProvider =(props)=>{
    const[cart,setcart]=useState([]);
    return(
        <CartContext.Provider value={{cart,setcart}}>
            {props.children}
        </CartContext.Provider>
    );
};