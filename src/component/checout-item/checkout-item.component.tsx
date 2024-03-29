import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

type ChecOutItemProps = {
  cartItem: CartItem;
};

const ChecOutItem: FC<ChecOutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const ClearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>-</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>+</Arrow>
      </Quantity>

      <Price>{price}$</Price>

      <RemoveButton onClick={ClearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default ChecOutItem;
