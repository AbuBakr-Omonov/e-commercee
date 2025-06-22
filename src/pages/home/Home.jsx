import { useProduct } from '@/api/hooks/useProduct'
import Browce from '@/components/browce/Browce'
import Hero from '@/components/hero/Hero'
import Product from '@/components/product/Product'
import React from 'react'

const Home = () => {
  const {getProduct} = useProduct()
  const {data} = getProduct({limit: 8})
  console.log(data);
  
  return (
    <div>
       <Hero />
       <Browce/>
       <Product data={data?.data?.products}/>
       
    </div>
  )
}

export default React.memo(Home)