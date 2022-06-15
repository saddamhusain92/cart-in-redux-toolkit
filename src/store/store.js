import { configureStore } from "@reduxjs/toolkit";
import cartRaducer from './cartSlice' 

const store = configureStore({
    reducer:{
        cart:cartRaducer
    },
})
export default store