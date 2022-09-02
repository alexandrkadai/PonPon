import { useContext } from 'react';
import { CartContext  } from '../../context/cart.context';
import {CheckoutItemContainer, ImageContainer, Name, Quantity, 
    Price, Arrow, Value, RemoveButton } from './checkout-item.styles';

const ChecOutItem = ({cartItem}) =>{
    const { name, imageUrl, price, quantity } = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const ClearItemHandler = () => clearItemFromCart(cartItem);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

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