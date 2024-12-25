import {  useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/api/productsApiSlice";

const AllProducts = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();

    const counter = useSelector((state) => state.counter);
    // console.log(data);

    if (isLoading) return <p>Loading</p>;
    if (error) return <p>{error}</p>
    return (
        <>
        <h2>{counter}</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mx-auto my-5 justify-items-center">
                {
                    data.products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    );
};

export default AllProducts;