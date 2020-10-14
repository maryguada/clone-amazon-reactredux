import React from 'react'
import '../Styles/Product.css';
import { useStateValue } from '../StateProvider';
function Product({ id, title, image, price, rating }) {

    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // add item to basket 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating
            }
        })


    };

    return (
        <div className="product">

            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product-rating">
                    {
                        Array(rating)
                            // fill with empty values
                            .fill()
                            .map((_) => (

                                <p>
                                    <span role='img'> ⭐ </span>
                                </p>
                            ))
                    }
                </div>
            </div>

            <img src={image}></img>
            <button onClick={addToBasket}>Add to cart</button>

        </div>
    )
}

export default Product
