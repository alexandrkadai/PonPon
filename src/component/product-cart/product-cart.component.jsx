import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import Button, {Button_Types_Classes} from '../button/button.component';

import {ProductCartContainerDiv, FooterDiv, NameSpn, PriceSpn } from  './product-cart.styles';

const ProductCart = ({product}) =>{
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () =>  addItemToCart(product);

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