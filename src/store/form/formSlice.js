import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    initialValue: 10,
    submissions: [],
    loginForm: {
        module: "React Mod7",
        username: '',
        email: '',
        password: 'mod7USIP-GIAN'
    },

}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addSubmission: (state, action) => {
            state.submissions.push(action.payload);
        },
        updateLoginForm: (state, action) => {
            state.loginForm = action.payload;
        },
        resetLoginForm: (state) => {
            state.loginForm = {
                module: "",
                username: "",
                email: "",
                password: ""
            }; 
        },
    }
});

export const { addSubmission, updateLoginForm, resetLoginForm } = formSlice.actions;

export default formSlice.reducer;