import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {CheckoutItemContainer, ImageContainer, Name, Quantity, 
    Price, Arrow, Value, RemoveButton } from './checkout-item.styles';

const ChecOutItem = ({ cartItem }) =>{
    const {name, imageUrl, quantity, price} = cartItem; 
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const ClearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    return (
        <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
        </ImageContainer>

       <Name>{name}</Name>
       <Quantity>
       <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
       <Value>{quantity}</Value>
       <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
       </Quantity>

       <Price>{price}$</Price>

        <RemoveButton onClick={ClearItemHandler}>&#10005;</RemoveButton> 
        </CheckoutItemContainer>
      )
};

export default ChecOutItem;