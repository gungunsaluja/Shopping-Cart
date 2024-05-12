import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Home = ({isDarkMode,setDarkMode,toggleDarkMode}) => {
  const API_URL = "https://fakestoreapi.com/products";
 
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error Aagyaa jii");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  },[]);
  return (
    <div >
       
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className = {`${isDarkMode?"bg-gradient-to-r from-slate-900 to-black ":"bg-white"}`}>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 min-h-[80vh] hover:border-blue-300 ">
          {posts.map((post) => (
            <Product key = {post.id} post={post} isDarkMode={isDarkMode} />
          ))
          }
        </div>

        </div>

    
      ) :
        <div className= 'flex justify-center itrms-center'>
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};
export default Home;
