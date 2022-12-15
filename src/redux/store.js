import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
    }
});

setupListeners(store.dispatch);