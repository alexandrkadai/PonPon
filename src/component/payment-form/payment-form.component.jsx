import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { Button_Types_Classes }  from '../button/button.component';
import {PaymentFormContainer, FormContainer} from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) =>{
        e.preventDefault();

    };

    return(
        <PaymentFormContainer>
        <FormContainer>
        <h2>CreditCard Payment</h2>
        <CardElement/>
        <Button buttonType={Button_Types_Classes.inverted}>Complete Payment</Button>
        </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;