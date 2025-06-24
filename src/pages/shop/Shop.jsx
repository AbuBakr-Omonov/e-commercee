import React, { useState } from 'react'
import { useProduct } from '@/api/hooks/useProduct';
import HeroShop from '@/components/heroShop/HeroShop';
import Support from '@/components/support/Support';
import { Pagination, Select } from 'antd';
import Product from '@/components/product/Product';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const { getProduct } = useProduct()

  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) })

  const handlChangePage = (page, pageS) => {

    if (pageS !== pageSize) {
      params.set("pageSize", pageS)
      params.set("page", "1")
    } else {
      params.set("page", page)
    }
    setParams(params)


  };
  return (
    <div>
      <HeroShop />
      
      <Product data={data?.data?.products} loading={isLoading} count={16} />

      <div className="mt-[30px] flex justify-center items-center">
        <Pagination current={page} onChange={handlChangePage} total={data?.data.total} pageSize={pageSize} />
      </div>

      <Support />


    </div>
  )
}

export default React.memo(Shop)
