import { useSelector } from "react-redux";

const Cart = () =>{
    const {cart} = useSelector((state)=>state);
    return (<div>
        {
            cart.length > 0 ? ():()
        }
    </div>

    );

};
export default Cart;