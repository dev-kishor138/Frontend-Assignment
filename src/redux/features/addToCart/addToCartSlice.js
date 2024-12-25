import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementByValue: (state, actions) => {
            state.counter += actions.payload;
        }
    },

});

export const { increment, decrement, incrementByValue } = addToCartSlice.actions;

export default addToCartSlice;  