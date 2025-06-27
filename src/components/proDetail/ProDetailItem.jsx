import React, { useState } from 'react'
import vektor from "../../assets/img/Vector.svg"
import { useNavigate } from 'react-router-dom'
import { Rate } from 'antd'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart, decrementCart, incrementCart } from '@/rudex/features/cart'
 
const ProDetailItem = (product) => {
      const navigate= useNavigate()
    const dispach = useDispatch()
    const [index, setIndex] = useState(0);

    const {title,thumbnail,price,images,rating,description,tags,category,sku,quantity} = product
  return (
    <div className="mb-]">
      <div className="text-sm text-gray-400 mb-4  bg-[#F9F1E7]  py-[38px] ">
        <div className="container mx-auto flex items-center gap-6 font-Pr">
           <div className="flex items-center gap-3">
          <span className="cursor-pointer " onClick={() => navigate("/")} >home</span>
            <img src={vektor} alt="" />
         </div>
         <div className="flex items-center gap-3">
          <span className="cursor-pointer " onClick={() => navigate("/shop")}>shop</span>
            <img src={vektor} alt="" />
         </div>
         <span className="text-black font-medium">| {title}</span>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
           {
            images?.map((item, inx) => (
              <img key={inx} src={item} onClick={() => setIndex(inx)} alt="thumb" className="w-20 h-20 object-cover rounded-lg " />
              
            ))
        }
          </div>
          <img src={images?.[index] || thumbnail} alt="Asgaard sofa" className="w-full h-[400px] object-contain rounded-xl" />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-xl text-green-600 font-semibold mb-2">Rs.{price}</p>

          <div className="flex items-center gap-1 text-yellow-500 mb-2">
            <Rate allowHalf defaultValue={2.5} />
            <span className="text-sm text-gray-500 ml-2">{rating}Customer Review</span>
          </div>

          <p className="text-gray-600 mb-4">
           {description}
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">Size</p>
            <div className="flex gap-2">
              <button className="border px-3 py-1 text-sm">L</button>
              <button className="border px-3 py-1 text-sm">XL</button>
              <button className="border px-3 py-1 text-sm">XS</button>
            </div>
          </div>

            <div className="mb-4">
            <p className="font-semibold mb-2">Color</p>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#5D5FEF" }} />
              <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#000000" }} />
              <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#D5A249" }} />
            </div>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex items-center border rounded">
              <button  onClick={() => dispach(decrementCart(product))} className="px-3 py-1">-</button>
              <span className="px-4">1</span>
              <button onClick={() => dispach(incrementCart(product))} className="px-3 py-1">+</button>
            </div>
            <button onClick={() => dispach(addToCart(product))} className="px-6 py-2 bg-black text-white rounded cursor-pointer  hover:bg-[#1b1b1b]">Add To Cart</button>
            <button className="px-6 py-2 border rounded">+ Compare</button>
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>SKU:</strong> {sku}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Tags:</strong> {tags?.[1]}</p>
            <p className="flex  item-center">
              <strong>Share:</strong>
              <span className="inline-flex gap-2 ml-2">
                <Facebook className="w-[20px]"/>
                <Instagram className="w-[20px]"/>
                <Twitter className="w-[20px]"/>
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProDetailItem