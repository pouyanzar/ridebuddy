import {loadStripe} from '@stripe/stripe-js';
import {Elements} from  '@stripe/react-stripe-js';
import {CheckoutForm} from './ChekoutForm';

const PUBLIC_KEY = "pk_test_51JaVIxCkzbHHc1cNhHOANp7v6fyTQ4SueUVXMSdEanVSFo4MnzHW3inJmm8dfiXjhWOJ0nqRieI5I9PkW7AThZvC00JdYIxv3i";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <div>
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
    </div>
    
  )
}

export default Stripe;