import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../../component/cart-item/cart-item.component';
import './checkout.styles.scss';

const CheckOut = () =>{
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
   
    return (
        <div>
        <h1>ChecOut Page</h1>
            {cartItems.map((cartItem) => {
                const { id, imageUrl, name, quantity} = cartItem;
                return <div key={id}>
                <img src={imageUrl} alt={name}/>
                <h2>{name }</h2>
                <span>{quantity}</span>
                <br/>
                <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                <br/>
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                </div>
            } 
            )}
        </div>
    )
}

export default CheckOut;