import React from 'react'
import  heroShop from "../../assets/img/shop_img.svg"
import  vektor from "../../assets/img/Vector.svg"
import { Link } from 'react-router-dom'
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
    </>
  )
}

export default HeroShop