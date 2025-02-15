import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice.js'
import productReducer from "./features/product/productSlice.js"
import dictionarySlice from "./features/dictionary/dictionarySlice.js"
import formReducer from "./form/formSlice.js"
import userReducer from "./features/user/userSlice.js"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        form: formReducer,
        user: userReducer,
        dictionary: dictionarySlice
    },
});

export default store;