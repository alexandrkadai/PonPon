import { CartItemContainer, ItemDetails, Name} from './cart-item.styles';

const CartItem = ({cartItem}) => {
    //Getting params
    const {name, imageUrl, price, quantity} = cartItem;
    const sum = quantity * price;
    return (
        <CartItemContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>{quantity} x ${price} = ${sum}</span>
        </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;