import { useSelector, useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import {add, remove} from "../redux/Slices/CartSlice";;

const Product = ({post}) => {
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    const removeFromcart = () =>{
        dispatch(remove(post.id));
        toast.success("Item removed from cart");
    }
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image}></img>
      </div>
      <div>
        <p>{post.price}</p>
      </div>
       {/* <button>
        {
      false ? <p>Remove Items</p> : <p>Add to Cart</p>} 
      </button>  */}

      {
        cart.some((p) => p.id == post.id) ?(
            <button onClick = {removeFromcart}>Remove Item</button>
        ) :(<button onClick={addToCart}>Add to Cart</button>)
      }
    </div>
  );
};
export default Product;
