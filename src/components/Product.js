import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { add, remove } from '../Redux/Slices/CartSlices';
import { toast } from 'react-toastify';

function  Product({post}) {
  const  {cart} = useSelector(state => state);
  
  const dispatch = useDispatch();

  const addToCart = () => {
      dispatch(add(post))
      toast('Item added to cart')
  }

  const removerFromCart = () => {
      dispatch(remove(post.id))
      toast("added")
  }

  return (
    <div  className=' flex  flex-col  items-center justify-between
      hover:scale-110   transition duration-300  ease-in shadow  gap-3 p-4 mt-10 ml-5  rounded-lg outline '>
    <div>
      <p className='text-gray-700  font-semibold  text-left text-lg truncate  w-40 mt-1'>{post.title}</p>
    </div>

    <div>
      <p className='w-40  text-gray-700  font-normal  text-[10px]  text-left '>{post.description.split(" ").slice(0,10).join(" ") +"..."}</p>
    </div>

    <div className='h-[180px]'>
      <img src={post.image} alt={post.title} className='h-full w-full'/>
    </div>

  <div className='flex gap-11   justify-between w-full mt-5  items-center'>  
    <div className=' text-green-600 font-semibold'>{`$${post.price}`}</div>
     
     {
        cart.some( (p) => p.id == post.id) ?
        (
          <button
          className=' text-gray-700  border-2  border-gray-700  px-3 text-[12px]  py-1  rounded-full uppercase  font-semibold
             hover:bg-gray-700 hover:text-white  transition duration-300  ease-in'
           onClick={removerFromCart}>
            remove Items
          </button>
        ):
        (
          <button
          className=' text-gray-700  border-2  border-gray-700  px-3 text-[12px]  py-1  rounded-full uppercase  font-semibold
             hover:bg-green-700 hover:text-white  transition duration-300  ease-in'
           onClick={addToCart}>
            Add to Cart
          </button>
        )
     }
     </div>
  </div>
  )
}

export default Product