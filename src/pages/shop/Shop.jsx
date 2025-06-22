import { useProduct } from '@/api/hooks/useProduct';
import HeroShop from '@/components/heroShop/HeroShop';
import ShopProduct from '@/components/shop/ShopProduct';
import { Pagination } from 'antd';
import React, { useState } from 'react'

const Shop = () => {
  const { getProduct } = useProduct()
  const {page,setPage} = useState(1)
  const { data } = getProduct({ limit: 16 })
  console.log(data?.data);

  const handlChangePage = (page) => {
   setPage(page)
  };
  return (
    <div>
      <HeroShop />
      <ShopProduct data={data?.data?.products} />

      <div className="mt-[30px] flex justify-center items-center">
        <Pagination current={2} onChange={handlChangePage} total={data?.data.total} pageSize={16} />
      </div>

    </div>
  )
}

export default Shop