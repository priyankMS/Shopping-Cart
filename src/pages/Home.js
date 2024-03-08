import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const urlAPI = "https://fakestoreapi.com/products";

    console.log(posts);
  async function fetchProuctData() {
    setLoading(true);
    try {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setPosts(data);
      
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProuctData();
  }, []);

  return (<div>{
    
        loading ? <Spinner/> : 
        posts.length > 0 ?
        (  <div  className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl  p-2  mx-auto  space-y-10  space-x-5  min-h-[80vh]">
            {
                posts.map((post)=>(
                    <Product  key={post.id} post={post} />
                ))
            }
        </div>
        ):
            <div>
                <p className=" flex  justify-center  items-center ">no data found</p>
            </div>
           
  }
  
  </div>);
}

export default Home;
