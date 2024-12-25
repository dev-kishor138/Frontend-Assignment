import image from '../assets/img/product.jpg';

const ProductCard = () => {
    return (
        <div className="bg-slate-200 rounded-md p-1 relative">
            <div className='absolute top-5 -left-2 bg-gradient-to-b from-[#FFA03B] to-[#F27D00] text-md px-3 text-white before:content-[""] before:w-4 before:h-4 before:bg-gradient-to-b before:from-[#FFA03B] before:to-[#F27D00] before:absolute before:-bottom-[7px] before:left-1 rounded-ss-lg before:-z-10 before:rotate-[130deg] after:content-[""] after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-[#F7B166] after:absolute after:top-0 after:-right-1'>

                <p>-৳200</p>
            </div>

            <div className='w-full h-[200px]  rounded-md overflow-hidden'>
                <img src={image} alt="Product Image" className='h-full w-full object-cover' />
            </div>
            <div className='px-5'>
                <h6>Fabrilife</h6>
                <h4>Fabrilife Mens Premium Designer Edition T Shirt</h4>
                <p>৳2500 <span>৳2700</span></p>
            </div>

        </div>
    );
};

export default ProductCard;