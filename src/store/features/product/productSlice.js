import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    //aca se define todas la variables del globales componente product.sjsx
    initialValue: 10,
    dataProduct: [
        { name: "Apple", price: 1, red: false },
        { name: "Dragonfruit", price: 1, red: false },
        { name: "PassionFruit", price: 2, red: true }
    ],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitialValue: (state, payload) => {
            state.initialValue = payload
        },
    }
});

export const { setInitialValue } = productSlice.actions

export default productSlice.reducer;