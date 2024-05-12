import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    // is input ko access hi payload se krenge
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    // input de re h joo cartslice me action payload se handle hoga
    toast.error("Item removed from cart");
  };
  return (
    <div className=" cards flex flex-col items-center justify-between hover:shadow-[0_20px_50px_rgba(8,_100,_104,_0.2)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl transition duration-300 ease-in-out gap-3 p-4 mt-10 mx-2 hover:scale-105 hover:shadow-blue-300">



{/* flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] */}
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"></img>
      </div>
      <div className="flex justify-between gap-7">
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      {/* <button>
        {
      false ? <p>Remove Items</p> : <p>Add to Cart</p>} 
      </button>  */}
      {/* cart me item phle se pdi h tw remove ka button dikhao or nhi padi h rw add to cart ka button dikhao */}

      {cart.some((p) => p.id === post.id) ? (
        <button
          onClick={removeFromCart}
          // className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in p-1 px-3"

          className = "button-4 p-5 w-11/12 text-center"
        >
          Remove Item
        </button>
      ) : (
        <button
          onClick={addToCart}
          // className="text-gray-700  carti border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
          className = "button-3 w-11/12  text-align: end text-align: center;"
        >
          
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default Product;
