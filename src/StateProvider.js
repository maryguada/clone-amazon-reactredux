// Setting up data layer. Creating global variables that is accessible
// all throughout the app rather than props from grandparent -> parent -> child 
// we need to track items in cart
import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
// build a provider 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// we need to export to be able to use in our other Components 
export const useStateValue = () => useContext(StateContext)