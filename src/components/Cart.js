import { Link } from "react-router-dom";
export const Cart = () => {
    return (
        <div>
            <h1 style={{color:"black"}}>Cart is Empty</h1>
                <p>Looks like you haven't added anything to your cart yet. 🛒</p>
                <p>Start exploring our delicious menu and add your favorite items to the cart!</p>
                < img src="https://th.bing.com/th/id/OIP.opajbFclIoBflj5RhPULpwHaGV?w=226&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
               <Link to="/"> <button className="cart-home"><b>Continue Shopping</b></button></Link>
        </div>
    )
};

