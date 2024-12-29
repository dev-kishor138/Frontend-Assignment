import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Navbar = () => {

    const { cart } = useCart();
    return (
        <div className="  fixed top-0 left-0 w-full z-[100]">
            <div className="container mx-auto bg-gray-100 p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold">
                            <Link to="/">
                                Products
                            </Link>
                        </h1>
                    </div>
                    <div>
                        <div className="relative">
                            <Link to="/cart" className="relative">
                                <Icon
                                    icon="ic:twotone-add-shopping-cart"
                                    className="cursor-pointer text-white bg-green-500 h-8 w-8 rounded-full p-1 relative"
                                    width="24"
                                    height="24"
                                />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full text-green-500 text-xs text-center">
                                    {cart.length ?? 0}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;