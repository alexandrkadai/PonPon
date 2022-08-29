import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import ChecOutItem from '../../component/checout-item/checkout-item.component';
 
import './checkout.styles.scss';

const CheckOut = () =>{
    const { cartItems, cartTotal } = useContext(CartContext);
   
    return (
        <div className='checkout-container'>
        <h1>Check Out</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                <span>Product</span>
                </div>
                
                <div className='header-block'>
                <span>Description</span>
                </div>

                <div className='header-block'>
                <span>Quantity</span>
                </div>
                
                <div className='header-block'>
                <span>Price</span>
                </div>
                
                <div className='header-block'>
                <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                
                 <ChecOutItem key={cartItem.id} cartItem={cartItem}/>
            ) 
            )}
          
            <span className='total'>Total : {cartTotal}$</span>
        </div>
    )
}

export default CheckOut;