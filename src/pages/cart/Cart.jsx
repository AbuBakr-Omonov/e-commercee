import CertView from '@/components/cartView/CertView';
import HeroShop from '@/components/heroShop/HeroShop';
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart.value)
    console.log(cart);
    
  return (
    <div>
        {/* <HeroShop/> */}
        <CertView data={cart} />

       
    </div>
  )
}

export default Cart