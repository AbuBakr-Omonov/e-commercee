import CertView from '@/components/cartView/CertView';
import HeroShop from '@/components/heroShop/HeroShop';
import Support from '@/components/support/Support';
import { Empty } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart.value)
    console.log(cart);
    
  return (
    <div>
        <HeroShop title={"Cart"}/>
        {
          cart.length?
          <CertView data={cart} />
          :<div className='text-center pt-20'><Empty description={false} /></div>
        }
         <Support />

        
    </div>
  )
}

export default Cart