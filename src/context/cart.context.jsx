import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0, 
    removeItemFromCart: () =>{}
});

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    );
};

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCatItems] = useState([]);
    const [cartCount, setCarCount] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity ,0)
        setCarCount(newCartCount);
    }, [cartItems]);
    const addItemToCart = (productToAdd) => {
        setCatItems(addCartItem(cartItems, productToAdd));
    } 
    const removeItemFromCart = (cartItemToRemove) => {
        setCatItems(removeCartItem(cartItems, cartItemToRemove));
    } 

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount,
        removeItemFromCart
    };

  

    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
};

