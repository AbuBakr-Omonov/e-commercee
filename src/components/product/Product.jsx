import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '@/rudex/features/wishlistSlice'
import { addToCart } from '@/rudex/features/cart'


const Skeleton = ({ count }) => {
  return (
    <>
      {
        Array(count).fill().map((_, inx) => (
          <div key={inx} className=" min-w-[303px] animate-pulse bg-white max-[768px]:w-full mx-auto shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-72 bg-gray-200">
              <div className="absolute top-2 left-2 w-[48px] h-[48px] rounded-full bg-gray-300" />
            </div>
            <div className="p-3 flex flex-col gap-2 bg-[#F4F5F7] py-[30px] h-full">
              <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-6 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

const Product = ({ data, loading, count }) => {
  const navigate = useNavigate()

  const dispach = useDispatch()
  const wishlist = useSelector(state => state.wishlist.value)
  return (
    <div className="container mx-auto px-4 py-8 mt-[80px]">
     

      <div className="grid grid-cols-4  sm:grid-cols-3 md:grid-cols-4 gap-6 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-10 ">
        {
          loading ? <Skeleton count={count} /> :
            data?.map((item) => (
              <div key={item.id} className=" bg-white max-[768px]:w-full mx-auto shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
                <div className="relative w-full h-72 overflow-hidden ">
                  <img onClick={() => navigate(`/productDetail/${item.id}`)}
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain  "
                  />
                  <button className="absolute top-2 left-2 w-[48px] h-[48px] rounded-full bg-[#E97171] text-[12px] font-Pm text-white">
                    -{item.discountPercentage}%
                  </button>
                </div>
                <button onClick={() => dispach(toggleWishlist(item))} className='absolute top-2 right-2 bg-gray-100 w-[35px] h-[35px] cursor-pointer rounded-[50%] '>
                  {
                    wishlist.some((element) => element.id === item.id) ? (
                      <HeartFilled style={{ color: 'red' }} />
                    ) : (
                      <HeartOutlined style={{ color: 'gray' }} />
                    )
                  }
                </button>
                <div className="p-3 flex flex-col gap-2 bg-[#F4F5F7] py-[30px] h-full">
                  <h3 className="text-sm font-medium line-clamp-1 text-[#3A3A3A] font-Ps text-[24px] max-[768px]:text-[20px] max-[540px]:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="font-Pm text-[#898989] font-semibold text-sm max-[540px]:text-xs">
                    {item.shippingInformation}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-lg font-bold text-gray-800">
                      {item.price.toLocaleString()}$
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                      {(item.price * 1.2).toFixed(0)}$
                    </p>
                  </div>
                  
                  <button onClick={() => dispach(addToCart(item))} className="cursor-pointer text-white font-semibold py-2 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all duration-200 bg-[#B88E2F] hover:bg-[#b88f2fea]"
                  >
                    <ShoppingCartOutlined />
                    Add to cart
                  </button>

                </div>
              </div>
            ))}
      </div>


    </div>

  )
}

export default React.memo(Product)
