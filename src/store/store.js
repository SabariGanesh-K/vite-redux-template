import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../features/slice'
export const store = configureStore({
    reducer:appReducer,
})

