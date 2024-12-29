import CartInfo from "../../components/CartInfo";
import useCart from "../../hooks/useCart";


const CartPage = () => {
    const { cart } = useCart();
    
    const subTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
        <>
            <div className="grid grid-cols-1 gap-2">
                <div className="bg-slate-100 w-full px-5 py-2 rounded-xl grid grid-cols-6 text-center">
                    <div>
                        Images
                    </div>
                    <div>
                        Product
                    </div>
                    <div>
                        Unit Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Total
                    </div>
                    <div>
                        Action
                    </div>
                </div>
                <div className="bg-slate-50 w-full px-5 py-2 rounded-xl grid grid-cols-6 border-b border-white">
                    {
                        cart.map(product => <CartInfo key={product.id} product={product} subTotal={subTotal} />)
                    }
                </div>
            </div>


            <div className="flex-end bg-slate-200">
                    <h2>Total: {subTotal.toFixed(2)}</h2>
            </div>
        </>

    );
};

export default CartPage;