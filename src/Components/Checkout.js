import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutImg from '../img/CheckoutImg.png'
import CheckoutProduct from './CheckoutProduct'
import '../Styles/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src={CheckoutImg}
                />
                <h2 className="checkout-title"> Your Shopping Basket </h2>
                {basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>


            {/* SUBTOTAL RIGHT SIDE  */}
            {basket.length > 0 && (
                <div className="checkout-right">
                    <Subtotal />


                </div>
            )}
        </div>
    )
}

export default Checkout
