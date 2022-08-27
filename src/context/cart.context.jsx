import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) =>{

};

export const CartContext = createContext({
    isCartOpen: 'false',
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () =>{}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCatItems] = useState([]);
    const value = {isCartOpen, setIsCartOpen };

    const addItemToCart = (productToAdd) => {
        setCatItems(addCartItem(cartItems, productToAdd));
    } 

    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
};

