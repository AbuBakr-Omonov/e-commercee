import React from 'react'
import dining from "../../assets/img/fring.svg"
import living from "../../assets/img/living.svg"
import bedroom from "../../assets/img/bedroom.svg"
const Browce = () => {
    return (
        <>
            <div className="mt-[60px] mb-[60px] container mx-auto px-4">
                <div className="text-center mb-[62px]">
                    <p className="text-[#333333] font-Pb text-[32px] leading-[100%] mb-[8px] max-[768px]:text-[28px] max-[480px]:text-[24px]">
                        Browse The Range
                    </p>
                    <p className="text-[#666666] font-Pr text-[20px] max-[768px]:text-[18px] max-[480px]:text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-[20px] max-[990px]:grid-cols-2 max-[640px]:grid-cols-1 max-[540px]:gap-[40px]">
                    <div className="flex flex-col items-center justify-center gap-[30px]">
                        <img src={dining} alt="Dining" className="w-full max-w-[320px]" />
                        <p className="font-Ps text-[24px] max-[480px]:text-[20px]">Dining</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[30px]">
                        <img src={living} alt="Living" className="w-full max-w-[320px]" />
                        <p className="font-Ps text-[24px] max-[480px]:text-[20px]">Living</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[30px]">
                        <img src={bedroom} alt="Bedroom" className="w-full max-w-[320px]" />
                        <p className="font-Ps text-[24px] max-[480px]:text-[20px]">Bedroom</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default React.memo(Browce)