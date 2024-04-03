import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing cart");
  console.log(cart);


  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className = 'w-[100%] md:w-[60%] flex flex-col'>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div>
            <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
            <div className = "font-semibold text-5xl text-green-700 mt-5">Summary</div>
            <p className = "text-xl">
              <span className ="text-gray-700 font-semibold text-xl ">Total Items:{cart.length}</span>
            </p>
          </div>
          <div>
            <p className = 'text-xl font-bold'>Total amount:${totalAmount}</p>
            <button className = 'bg-green-700 hover:bg-purple-200 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>Checkout now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-100 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
