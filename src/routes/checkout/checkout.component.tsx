import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import ChecOutItem from '../../component/checout-item/checkout-item.component';
import PaymentForm from '../../component/payment-form/payment-form.component';
import { CheckOutContainer, CheckOutHeader, CheckHeaderBlock, Total } from './checkout.styles';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckOutContainer>
      <h1>Check Out</h1>
      <CheckOutHeader>
        <CheckHeaderBlock>
          <span>Product</span>
        </CheckHeaderBlock>

        <CheckHeaderBlock>
          <span>Description</span>
        </CheckHeaderBlock>

        <CheckHeaderBlock>
          <span>Quantity</span>
        </CheckHeaderBlock>

        <CheckHeaderBlock>
          <span>Price</span>
        </CheckHeaderBlock>

        <CheckHeaderBlock>
          <span>Remove</span>
        </CheckHeaderBlock>
      </CheckOutHeader>

      {cartItems.map((cartItem) => (
        <ChecOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total>Total : {cartTotal}$</Total>
      <PaymentForm />
    </CheckOutContainer>
  );
};

export default CheckOut;
