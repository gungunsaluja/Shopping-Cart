
import {FcDeleteDatabse} from "react-icons";
import { useDispatch } from "react-redux";

const CartItem = ({item,itemIndex}) =>{
    const dispatch = useDispatch();

    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.success("Item Removed");
       
    }
    return<div>
        <div>
            <div>
                <img src = {item.image}/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div>
                    <p>
                        {item.price}
                    </p>
                     <div
                     onClick = {removeFromCart}><FcDeleteDatabse/></div>

                </div>
            </div>
        </div>

    </div>
}
export default CartItem;