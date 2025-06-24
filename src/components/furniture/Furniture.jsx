import React from 'react'
import furniture from '../../assets/img/furniture.svg'
const Furniture = () => {
  return (
    <>
      <div className='container mx-auto my-[68px]'>
        <div className='flex flex-col items-center justify-center gap-[8px] '>
            <p className='font-Ps text-[#616161] text-[20px] max-[768px]:text-[16px]  max-[640px]:text-[14px]
            '>Share your setup with</p>
            <p className='font-Pb text-[#3A3A3A] text-[40px] max-[768px]:text-[30px]max-[640px]:text-[22px]  max-[400]:text-[18px]'>#FuniroFurniture</p>
        </div>
         <img src={furniture} alt="" />
      </div>
    </>
  )
}

export default React.memo(Furniture)