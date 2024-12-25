import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApiSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/products?limit=0'
        })
    })
})

export const { useGetAllProductsQuery } = productsApiSlice;

export default productsApiSlice;