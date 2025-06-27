import { decrementCart, incrementCart, removeCart } from '@/rudex/features/cart';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CertView = ({ data }) => {
    const dispatch = useDispatch();
     const  navigate = useNavigate()
    return (
        <div >
           <div className="container mx-auto mt-[74px] p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
             <div className="lg:col-span-2">
                <div className="p-4 rounded-lg overflow-x-auto">
                    <div className="bg-[#F9F1E7] py-4 px-6 md:px-10 mb-8 grid grid-cols-4 sm:grid-cols-5 font-semibold border-b text-gray-600 text-sm">
                        <span className="font-Pm text-[16px] sm:text-[18px] text-black">Product</span>
                        <span className="font-Pm text-[16px] sm:text-[18px] text-black hidden sm:block">Price</span>
                        <span className="font-Pm text-[16px] sm:text-[18px] text-black">Quantity</span>
                        <span className="font-Pm text-[16px] sm:text-[18px] text-black">Subtotal</span>
                        <span className="hidden sm:block"></span>
                    </div>

                    {data?.map((product) => (
                        <div key={product.id} className="grid grid-cols-4 sm:grid-cols-5 items-center py-4  text-sm gap-2">
                            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                                <img src={product.thumbnail} alt={product.title} className="w-14 h-14 object-cover rounded" />
                                <p className="text-gray-800 text-sm sm:text-base">{product.title}</p>
                            </div>

                            <span className="text-gray-700 hidden sm:block">Rs. {product.price.toLocaleString()}</span>

                            <div className="flex items-center gap-2">
                                <button
                                    disabled={product.quantity <= 1}
                                    onClick={() => dispatch(decrementCart(product))}
                                    className="border rounded px-2 py-0.5 disabled:opacity-40"
                                >-</button>
                                <span>{product.quantity}</span>
                                <button
                                    onClick={() => dispatch(incrementCart(product))}
                                    className="border rounded px-2 py-0.5"
                                >+</button>
                            </div>

                            <span className="font-medium text-gray-900">
                                Rs. {(product.price * product.quantity).toLocaleString()}
                            </span>

                            <button
                                onClick={() => dispatch(removeCart(product))}
                                className="text-yellow-600 hover:text-yellow-800 text-lg hidden sm:block"
                                title="Remove"
                            >
                                <DeleteOutlined />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#F9F1E7] flex flex-col items-center justify-center  py-[70px] sm:p-6 rounded-lg shadow-sm ">
                <h2 className="text-2xl sm:text-[32px] font-semibold mb-10 text-center font-Pb">Cart Totals</h2>

                <div className="flex justify-between text-sm text-gray-700 font-Pm mb-2">
                    <span>Subtotal</span>
                    <span>
                        Rs.{" "}
                        {data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                    </span>
                </div>

                <div className="flex justify-between text-lg border-t pt-3 font-bold text-[#B88E2F] font-Pm">
                    <span>Total</span>
                    <span className="text-[18px] sm:text-[20px]">
                        Rs.{" "}
                        {data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                    </span>
                </div>

                <button onClick={() => navigate("/checkout")} className="w-full mt-6 border border-black py-2 rounded-[15px] hover:bg-black hover:text-white transition-all">
                    Check Out
                </button>
            </div>
           </div>
        </div>


    )
}

export default CertView