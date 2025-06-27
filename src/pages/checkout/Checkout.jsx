import Checkoutitem from '@/components/checkout/Checkoutitem';
import HeroShop from '@/components/heroShop/HeroShop';
import Support from '@/components/support/Support';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


const Checkout = () => {
     const cart = useSelector((state) => state.cart.value);
     if(!cart.length){
        return <Navigate replace to="/cart"/>
     }

    return (
       <div>
        <HeroShop title={"Checkout"} />
         <Checkoutitem cart={cart}/>
          <Support />
       </div>
    )
}

export default React.memo(Checkout)
