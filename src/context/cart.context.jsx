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
    cartItems: [],
    cartTotal: 0,
    cartCount: 0, 
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () =>{},
    clearItemFromCart: () =>{}
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

const clearCartItem = ( cartItems, cartItemToClear) => {
    return  cartItems.filter((cartItem) =>cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCatItems] = useState([]);
    const [cartCount, setCarCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity ,0)
        setCarCount(newCartCount);
    }, [cartItems]);

    useEffect(() =>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price ,0)
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCatItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCatItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToRemove) => {
        setCatItems(clearCartItem(cartItems, cartItemToRemove));
    }; 


    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
        
    };

  

    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
};

