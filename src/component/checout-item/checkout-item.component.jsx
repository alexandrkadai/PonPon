import { useContext } from 'react';
import { CartContext  } from '../../context/cart.context';
import './checkout-item.styles.scss';

const ChecOutItem = ({cartItem}) =>{
    const { name, imageUrl, price, quantity } = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const ClearItemHandler = () => clearItemFromCart(cartItem);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>

       <span className='name'>{name}</span>
       <div className='quantity'>
       <span className='arrow' onClick={removeItemFromCartHandler}>&#10094;</span>
       <span className='value'>{quantity}</span>
       <span className='arrow' onClick={addItemToCartHandler}>&#10095;</span>
       </div>

       <span className='price'>{price}$</span>

        <div className='remove-button' onClick={ClearItemHandler}>&#10005;</div> 
        </div>
      )
};

export default ChecOutItem;