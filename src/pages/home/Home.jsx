import { useProduct } from '@/api/hooks/useProduct'
import Browce from '@/components/browce/Browce'
import Furniture from '@/components/furniture/Furniture'
import Hero from '@/components/hero/Hero'
import Product from '@/components/product/Product'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { getProduct } = useProduct()
  const { data, isLoading } = getProduct({ limit: 8 })
  console.log(data);
    const navigate =useNavigate()
  return (
    <div>
      <Hero />
      <Browce />
      <Product data={data?.data?.products}  loading={isLoading} count={8} />
      <div className="text-center mt-[32px]">
        <button onClick={() => navigate("/shop")} className="py-[12px] px-[74px] text-[#B88E2F] border border-[#B88E2F] transition-all duration-300 hover:bg-[#B88E2F] hover:text-white max-[540px]:px-[40px] max-[540px]:text-sm">
          Show More
        </button>
      </div>
      <Furniture />

    </div>
  )
}

export default React.memo(Home)