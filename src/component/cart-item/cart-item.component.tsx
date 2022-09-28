import { FC } from 'react';
import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';
import { CartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItemComp: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const sum = quantity * price;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price} = ${sum}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItemComp;
