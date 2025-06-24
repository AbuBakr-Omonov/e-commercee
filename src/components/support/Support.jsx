import React from 'react'
import high from '../../assets/img/high.svg'
import warranty from '../../assets/img/warranty.svg'
import free from '../../assets/img/free.svg'
import support from '../../assets/img/support.svg'

const Support = () => {
  return (
    <>
      <div className="mt-[85px] py-[100px] bg-[#FAF3EA]">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 px-4">
          <div className="flex items-center gap-4 min-w-[250px]">
            <img src={high} alt="high quality" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <p className="font-Ps text-[18px] text-[#242424]">High Quality</p>
              <p className="font-Pm text-[14px] text-[#898989]">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center gap-4 min-w-[250px]">
            <img src={warranty} alt="warranty" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <p className="font-Ps text-[18px] text-[#242424]">Warranty Protection</p>
              <p className="font-Pm text-[14px] text-[#898989]">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[250px]">
            <img src={free} alt="free shipping" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <p className="font-Ps text-[18px] text-[#242424]">Free Shipping</p>
              <p className="font-Pm text-[14px] text-[#898989]">Order over 150 $</p>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[250px]">
            <img src={support} alt="support" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <p className="font-Ps text-[18px] text-[#242424]">24 / 7 Support</p>
              <p className="font-Pm text-[14px] text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default React.memo(Support)