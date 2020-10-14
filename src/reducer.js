import React from 'react';

export const initialState = {
    basket: [],
    user: null,
}

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
            return { state }

        default:
            return state;
    }
}
export default reducer;


/*
reducer is a way of saying when I get

*/