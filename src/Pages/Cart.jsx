import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

const Cart = () =>{
    const {cart} = useSelector((state)=>state);
    return (<div>
        {
            cart.length > 0 ?(
                <div>
                    <div>{cart.map((item,index)=>{
                        return <CartItem key = {item.id} item = {item} itemIndex = {index}/>
                    }) }
                        </div>
                    </div>
            ):(
                <div>
                    <h1>Cart Empty</h1>
                    <Link to = {"/"}>
                    <button>Shop Now</button>

                    </Link>
                    </div>
            )
        }
    </div>

    );

};
export default Cart;