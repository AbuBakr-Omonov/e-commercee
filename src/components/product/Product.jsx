import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <p className="font-Pb mb-[32px] text-[40px] leading-[120%] text-center max-[990px]:text-[30px] max-[768px]:text-[25px] max-[540px]:text-[20px]">
          Our Products
        </p>
      </div>

      <div className="grid grid-cols-4  sm:grid-cols-3 md:grid-cols-4 gap-6 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-10 ">
        {data?.map((item) => (
          <div
            key={item.id}
            className=" bg-white max-[768px]:w-full mx-auto shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-72 overflow-hidden ">
              <img
                onClick={() => navigate(`/productDetail/${item.id}`)}
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
              <button className="absolute top-2 right-2 w-[48px] h-[48px] rounded-full bg-[#E97171] text-[12px] font-Pm text-white">
                -{item.discountPercentage}%
              </button>
            </div>

            <div className="p-3 flex flex-col gap-2 bg-[#F4F5F7] py-[30px] h-full">
              <h3 className="text-sm font-medium line-clamp-2 text-[#3A3A3A] font-Ps text-[24px] max-[768px]:text-[20px] max-[540px]:text-[18px]">
                {item.title}
              </h3>
              <p className="font-Pm text-[#898989] font-semibold text-sm max-[540px]:text-xs">
                {item.availabilityStatus}
              </p>
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold text-[#3A3A3A] max-[540px]:text-base">
                  Rb{item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-[32px]">
        <button className="py-[12px] px-[74px] text-[#B88E2F] border border-[#B88E2F] transition-all duration-300 hover:bg-[#B88E2F] hover:text-white max-[540px]:px-[40px] max-[540px]:text-sm">
          <Link to="/shop">Show More</Link>
        </button>
      </div>
    </div>

  )
}

export default React.memo(Product)
