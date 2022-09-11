import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart} from '../../store/cart/cart.action';
import {selectCartItems} from '../../store/cart/cart.selector';
import Button, {Button_Types_Classes} from '../button/button.component';

import {ProductCartContainerDiv, FooterDiv, NameSpn, PriceSpn } from  './product-cart.styles';

const ProductCart = ({product}) =>{
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () =>  dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCartContainerDiv>
        <img src={imageUrl} alt={`${name}`}/>
        <FooterDiv>
        <NameSpn>{name}</NameSpn>
        <PriceSpn>{price}</PriceSpn>
        </FooterDiv>
        <Button buttonType={Button_Types_Classes.inverted} onClick={addProductToCart}>Add to Cart</Button>
           </ProductCartContainerDiv>
    )
};

export default ProductCart;