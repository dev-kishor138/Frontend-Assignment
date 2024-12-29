import { Icon } from '@iconify/react/dist/iconify.js';
import defaultImage from '../assets/img/product.jpg';
import useCart from '../hooks/useCart';

const ProductCard = ({ product }) => {
    const { brand, price, title, discountPercentage, category, thumbnail } = product;


    // Calculate discount and final price
    const discountAmount = discountPercentage
        ? Math.ceil((discountPercentage * price) / 100)
        : 0;
    const finalPrice = discountPercentage
        ? (price - discountAmount).toFixed(2)
        : price.toFixed(2);

    const { addProduct } = useCart();
    // Handle Add to Cart logic
    const handleAddToCart = () => {
        addProduct(product);

    };



    return (
        <div className="rounded-md p-1 relative group hover:shadow-xl hover:bg-white w-full max-w-[300px] bg-slate-50">
            <div className='relative w-full'>
                <Icon
                    icon="solar:heart-linear"
                    width="24"
                    height="24"
                    className="absolute top-5 right-5 z-10 text-green-500 transition-all hover:opacity-0 cursor-pointer"
                />

                {/* Hover Icon */}
                <Icon
                    icon="solar:heart-bold"
                    width="24"
                    height="24"
                    className="absolute top-5 right-5 z-10 text-red-500 transition-all opacity-0 hover:opacity-100 cursor-pointer"
                />
                {
                    discountPercentage !== null && discountPercentage !== undefined && discountPercentage > 0 ? (
                        <>
                            <div className='absolute top-[35px] -left-[4px] w-4 h-4 bg-gradient-to-b from-[#FFA03B] to-[#F27D00] rotate-[130deg] -z-10'>
                            </div>
                            <div className='absolute top-5 -left-2 bg-gradient-to-b from-[#FFA03B] to-[#F27D00] text-md h-6 w-[80px] px-3 text-white rounded-ss-lg z-20 text-center'>
                                <p>-{" "}${discountAmount}</p>
                            </div>
                            <div
                                className="absolute top-5 left-[60px] h-6 w-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[#F27D00] before:absolute before:top-0 before:-left-3 before:h-6 before:w-0 before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent before:border-b-[24px] before:border-b-[#F7B166] before:rotate-180 rounded-sm before:rounded-sm z-10"
                            >
                            </div>
                        </>
                    ) : null
                }
            </div>

            <div className="w-full h-[200px] rounded-md overflow-hidden relative">
                <img
                    src={thumbnail || defaultImage}
                    alt="Product Image"
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-5 left-0 w-full z-10 px-5 grid gap-2 translate-x-full group-hover:-translate-x-0 transition-transform duration-300">
                    <button
                        className="flex justify-center py-1 w-full bg-opacity-30 bg-white text-green-500 rounded-md border border-green-500 border-opacity-30 hover:bg-[#03A629] hover:text-white transition-all"
                        onClick={handleAddToCart}
                    >
                        <Icon icon="ic:outline-shopping-cart" width="24" height="24" /> Add To Cart
                    </button>
                    <button className="flex justify-center py-1 w-full bg-opacity-30 bg-white text-green-500 rounded-md border border-green-500 border-opacity-30 hover:bg-[#03A629] hover:text-white transition-all">
                        <Icon icon="ic:outline-remove-red-eye" width="24" height="24" /> Quick View
                    </button>
                </div>
            </div>
            <div className="px-5 py-3">
                <h6 className="text-[#5A6573] font-sm font-normal capitalize">{brand ?? category ?? ""}</h6>
                <h4 className="text-[#1A2B3D] font-bold text-lg mb-2">{title.slice(0, 30) ?? ""}</h4>

                <p className="text-[#1882FF] font-bold text-2xl">
                    ${finalPrice}{" "}
                    {discountPercentage > 0 && (
                        <span className="text-[#77818C] text-lg font-normal">
                            <del>${price.toFixed(2)}</del>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
