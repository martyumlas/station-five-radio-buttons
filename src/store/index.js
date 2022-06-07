import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/menuReducer";

export const store = configureStore({
    reducer: {
        menu: menuReducer
    },
})