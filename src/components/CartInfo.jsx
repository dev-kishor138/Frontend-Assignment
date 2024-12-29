
import { Icon } from "@iconify/react/dist/iconify.js";
import useCart from "../hooks/useCart";

const CartInfo = ({ product }) => {
    const { price, title, thumbnail, quantity } = product;
    const { addProduct, removeProduct, updateByOne } = useCart();

    return (
        <>
            <div>
                <img src={thumbnail} alt="Product Image" className="h-[100px] rounded-md" />
            </div>
            <div className="flex justify-center items-center">
                {title ?? ""}
            </div >
            <div className="flex justify-center items-center">
                {price ?? 0}
            </div>
            <div className="flex justify-center items-center gap-2">
                <button className="bg-green-400 px-2 py-1 rounded-sm text-white" onClick={() => addProduct(product)}>
                    <Icon icon="fe:plus" width="24" height="24" />
                </button>
                <span>{quantity ?? 0}</span>
                <button className="bg-green-400 px-2 py-1 rounded-sm text-white" onClick={() => updateByOne(product)}>
                    <Icon icon="fe:minus" width="24" height="24" />
                </button>
            </div>
            <div className="flex justify-center items-center">
                {(price * quantity).toFixed(2)}
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-red-400 text-white px-2 py-1 rounded-sm" onClick={() => removeProduct(product)}>
                    <Icon icon="solar:trash-bin-trash-linear" width="24" height="24" />
                </button>
            </div>
        </>
    );
};

export default CartInfo;