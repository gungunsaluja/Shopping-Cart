import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {
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
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-5 min-h-[80">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))
          }
        </div>
      ) :
        <div>
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};
export default Home;
