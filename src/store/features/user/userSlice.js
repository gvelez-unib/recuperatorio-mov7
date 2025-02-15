import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react";

const initialState = {
    //aca se define todas la variables del globales componente product.sjsx
    valor: '',
    correo: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.valor = action.payload
        },
        setCorreo: (state, action) => {
            state.correo = action.payload
        },
    }
});

export const { setUser, setCorreo } = userSlice.actions

export default userSlice.reducer;