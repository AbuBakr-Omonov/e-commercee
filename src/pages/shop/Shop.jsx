import React, { useState } from 'react'
import { useProduct } from '@/api/hooks/useProduct';
import HeroShop from '@/components/heroShop/HeroShop';
import Support from '@/components/support/Support';
import { Pagination, Select } from 'antd';
import Product from '@/components/product/Product';
import { useSearchParams } from 'react-router-dom';
import kilen from "../../assets/img/kilen.svg"
import system from "../../assets/img/system.svg"
import vek from "../../assets/img/vek.svg"

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
    <>
      <HeroShop title={"Shop"} />
        <div className="bg-[#F9F1E7] py-4 px-6 md:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

          <div className="flex items-center gap-4 flex-wrap">
            <img src={system} alt="System" className="w-5 h-5" />
            <p className="text-sm font-medium text-gray-700">Filter</p>
            <img src={vek} alt="Sort" className="w-5 h-5" />
            <img src={kilen} alt="Grid" className="w-5 h-5" />
            <div className="border-l h-5 border-gray-400 mx-2"></div>
            <p className="text-sm text-gray-600">Showing 1–16 of 32 results</p>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <Select style={{ width: 80 }} defaultValue={16}>
                <Option value={8}>8</Option>
                <Option value={16}>16</Option>
                <Option value={24}>24</Option>
                <Option value={32}>32</Option>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Select style={{ width: 160 }} defaultValue="default">
                <Option value="default">Default</Option>
                <Option value="price-low-high">Price: Low to High</Option>
                <Option value="price-high-low">Price: High to Low</Option>
                <Option value="title-az">Title: A-Z</Option>
              </Select>
            </div>
          </div>

        </div>
       </div>
          
      <Product data={data?.data?.products} loading={isLoading} count={16} />

      <div className="mt-[30px] flex justify-center items-center">
        <Pagination current={page} onChange={handlChangePage} total={data?.data.total} pageSize={pageSize} />
      </div>

      <Support />


    </>
  )
}

export default React.memo(Shop)
