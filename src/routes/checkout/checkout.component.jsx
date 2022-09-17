import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import ChecOutItem from '../../component/checout-item/checkout-item.component';
import PaymentForm from '../../component/payment-form/payment-form.component';
import './checkout.styles.scss';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
            <PaymentForm/>
        </div>
    )
}

export default CheckOut;