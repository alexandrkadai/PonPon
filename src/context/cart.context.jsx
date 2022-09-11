import { createContext, useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils';

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
    const [{cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity ,0);
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price ,0);
    
    dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
             cartTotal: newCartTotal,
              cartCount: newCartCount
            } )
     );
        };

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (cartItemToRemove) => {
        const newCartItems = (clearCartItem(cartItems, cartItemToRemove));
        updateCartItemsReducer(newCartItems);
    }; 

    const setIsCartOpen = (bool) =>{
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }
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

