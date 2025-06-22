import React from 'react'
import heroBg from "../../assets/img/hero_img.svg"
import { Button } from 'antd'
const Hero = () => {
    return (
        <>
            <div
                className="h-screen bg-cover bg-center text-white p-10 flex flex-col justify-center items-end max-[1024px]:items-center max-[1024px]:text-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="bg-white opacity-80 py-14 px-10 max-w-[643px] rounded-lg shadow-lg 
                   max-[1024px]:max-w-[500px] 
                   max-[768px]:max-w-[400px] 
                   max-[480px]:max-w-[90%] max-[480px]:px-6 max-[480px]:py-8"
                >
                    <p className="text-[#333333] font-Ps mb-2 text-base max-[768px]:text-sm">
                        New Arrival
                    </p>

                    <p className="text-[#B88E2F] font-pb leading-[65px] text-[52px] 
                   max-[1024px]:text-[42px] 
                   max-[768px]:text-[32px] 
                   max-[480px]:text-[24px] max-[480px]:leading-[38px]"
                    >
                        Discover Our New Collection
                    </p>

                    <p className="text-[18px] font-Pm text-[#333333] mb-[46px] 
                   max-[1024px]:text-[16px] 
                   max-[768px]:text-[14px] 
                   max-[480px]:text-[13px] max-[480px]:mb-6"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>

                    <Button
                        type="primary"
                        className="
                           transition-all duration-300 
                           hover:!bg-[#946d1e] hover:!border-[#946d1e] 
                            text-[16px] font-semibold
                            w-[300px]
                            max-[1024px]:w-[250px]
                            max-[768px]:w-[200px]
                            max-[480px]:w-full
                              "
                        style={{
                            backgroundColor: '#B88E2F',
                            borderColor: '#B88E2F',
                            color: 'white',
                            paddingTop: '16px',
                            paddingBottom: '16px',
                        }}
                    >
                        BUY NOW
                    </Button>

                </div>
            </div>
        </>
    )
}

export default Hero