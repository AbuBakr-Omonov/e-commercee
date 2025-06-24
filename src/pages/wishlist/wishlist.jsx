import Product from '@/components/product/Product';
import React from 'react'
import { useSelector } from 'react-redux';
import NotFound from '../notFaund/NotFound';

const Wishlist = () => {
   const wishlist =  useSelector((state) => state.wishlist.value)
   console.log(wishlist);
   
  return (
    <>
       <div>
        {
            wishlist.length ?
            <Product data={wishlist}/>
            : <NotFound/>
        }
       </div>
    </>
  )
}

export default Wishlist