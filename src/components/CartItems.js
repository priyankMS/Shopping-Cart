import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlices";
import { toast } from "react-toastify";
function CartItems({ item }) {
  
  const dispatch =useDispatch();
  const removeFromCart=()=>{
     dispatch(remove(item.id))
    toast.error("Item removed from cart")
  }

  return (
    <div>
         <div>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
               <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
               </div>
               <div>
                 <p>{item.price}</p>
                   <div onClick={removeFromCart}>
                          <MdDelete/> 
                   </div>
               </div>
         </div>
    </div>
  );
}

export default CartItems;
