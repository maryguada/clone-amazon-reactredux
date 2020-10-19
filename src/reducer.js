import React from 'react';

export const initialState = {
    basket: [{

        id: "175",
        title: "New Apple iPad Pro 11-inch",
        price: 749.99,
        rating: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/815ztYEEwYL._AC_SX425_.jpg'
    }],
    user: null,
}


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket 
            // copy what is currently in state
            // return basket, with additional item. 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            // logic for removing. 
            // make copy 
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                // splice will cut the item from basket
                newBasket.splice(index, 1)
            } else {
                console.log("Cannot remove item, item does not exist")
            }

            return { ...state, basket: newBasket }

        default:
            return state;
    }
}
export default reducer;


/*
reducer is a way of saying when I get

*/