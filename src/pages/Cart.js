import React, { useEffect ,useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";


function Cart() {
  const { cart } = useSelector((state) => state);
   const [totalAmount, setTotalAmount] = useState(0);
   useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
   },[cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return <CartItems item={item} key={item.id} />;
          })}

          <div>
            <div>
              <p>YOUR CART</p>
              <h2>summary</h2>
              <p>
                <span>total item : {cart.length}</span>
              </p>
            </div>
           
            <div>
              <p>total Amount : ${totalAmount}</p>
              <button>Check Out</button>
            </div>

          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20 ">
          <h2 className=" text-sky-600 uppercase text-[20px]">Cart is empty</h2>
          <Link to="/">
            <button className=' text-gray-700  border-2  border-gray-700  px-3 text-[20px]  py-1  rounded-full uppercase  font-semibold
             hover:bg-green-700 hover:text-white  transition duration-300  ease-in mt-5'>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
