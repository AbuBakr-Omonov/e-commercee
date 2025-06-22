import React from 'react'
import  high from '../../assets/img/high.svg'
import  warranty from '../../assets/img/warranty.svg'
import  free from '../../assets/img/free.svg'
import  support from '../../assets/img/support.svg'

const Support = () => {
  return (
    <>
       <div className=' mt-[85px] py-[100px] bg-[#FAF3EA]'>
        <div className=' container mx-auto flex  items-center gap-14 max-[1200px]:flex-wrap'>
            <div className='flex items-center   gap-[10px]'>
              <img src={high} alt="" />
              <div className='flex flex-col gap-[2px]'>
                <p className='font-Ps  text-[25px]  text-[#242424]'>High Quality</p>
                <p  className='font-Pm  text-[20px] text-[#898989]'>crafted from top materials</p>
              </div>
            </div>
            <div className='flex items-center   gap-[10px]'>
              <img src={warranty} alt="" />
              <div className='flex flex-col gap-[2px]'>
                <p className='font-Ps  text-[25px] text-[#242424]'>Warranty Protection</p>
                <p  className='font-Pm  text-[20px] text-[#898989]'>Over 2 years</p>
              </div>
            </div>
            <div className='flex items-center   gap-[10px]'>
              <img src={free} alt="" />
              <div className='flex flex-col gap-[2px]'>
                <p className='font-Ps  text-[25px] text-[#242424]'>Free Shipping</p>
                <p  className='font-Pm  text-[20px] text-[#898989]'>Order over 150 $</p>
              </div>
            </div>
            <div className='flex items-center   gap-[10px]'>
              <img src={support} alt="" />
              <div className='flex flex-col gap-[2px]'>
                <p className='font-Ps  text-[25px] text-[#242424]'>24 / 7 Support</p>
                <p  className='font-Pm  text-[20px] text-[#898989]'> Dedicated support</p>
              </div>
            </div>
        </div>
       </div>
       
    </>
  )
}

export default Support