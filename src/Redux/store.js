import { configureStore } from "@reduxjs/toolkit";
import windowReducer from './windowSlice'

export default configureStore({
    reducer: {
        window: windowReducer
    }
});