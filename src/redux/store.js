import { configureStore } from "@reduxjs/toolkit";
import productsApiSlice from "./features/api/productsApiSlice";

const store = configureStore({
    reducer: {
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware),
})

export default store;