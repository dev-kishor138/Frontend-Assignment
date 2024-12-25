import ProductCard from "../../components/ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/api/productsApiSlice";

const AllProducts = () => {

    const { data,error, isLoading } = useGetAllProductsQuery();
    console.log(data);

    if(isLoading) return <p>Loading</p>;
    if(error) return <p>{error}</p>
    return (
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-10 my-5">
            {/* {
                data.products.map(product => <p key={product.id}>{product.title ?? ""}</p>)
            } */}
            <ProductCard/>
        </div>
    );
};

export default AllProducts;