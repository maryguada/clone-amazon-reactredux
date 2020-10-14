import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">

            <img src={image} />

            <div className="checkoutProduct-info">


            </div>
        </div>
    )
}

export default CheckoutProduct
