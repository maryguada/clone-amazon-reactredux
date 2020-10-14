import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutImg from '../img/CheckoutImg.png'
// import CheckoutProduct from './CheckoutProduct'
import '../Styles/Checkout.css';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout-ad"
                src={CheckoutImg}
            />

            <h2> Your Shopping Basket </h2>
        /* List out all Checkout Products */

        </div>
    )
}

export default Checkout
