import { configureStore } from "@reduxjs/toolkit";
import productsApiSlice from "./features/api/productsApiSlice";
import addToCartSlice from "./features/addToCart/addToCartSlice";

const store = configureStore({
    reducer: {
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
        addToCart: addToCartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware),
})

export default store;