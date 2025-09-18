import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../redux/cartSlice";
import "./CartDrawer.css";

export default function CartDrawer() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.cart.isOpen);

    return (
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <div className="cart-drawer-header">
                <h2>Cart</h2>
                <button onClick={() => dispatch(closeCart())}>✕</button>
            </div>

            <div className="cart-drawer-content">
                <p>Cart drawer opened!</p>
                <button>Checkout</button>
            </div>
        </div>
    );
}

