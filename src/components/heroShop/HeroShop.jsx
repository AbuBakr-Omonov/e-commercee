import React from 'react'
import heroShop from "../../assets/img/shop_img.svg"
import vektor from "../../assets/img/Vector.svg"
import { Link } from 'react-router-dom'
import kilen from "../../assets/img/kilen.svg"
import system from "../../assets/img/system.svg"
import vek from "../../assets/img/vek.svg"
import { Select } from 'antd'

const HeroShop = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${heroShop})` }} className='h-80 bg-cover bg-center flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <p className='font-Pm text-[48px]'>Shop</p>
          </div>
          <div className='flex items-center  gap-2.5'>
            <div className='flex items-center gap-1'>
              <Link to={"/"}>
                <p className='font-Pm '>Home</p>
              </Link>
              <img src={vektor} alt="" />
            </div>
            <p className='font-Pm '>shop</p>
          </div>
        </div>
      </div>
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
          


    </>
  )
}

export default React.memo(HeroShop)