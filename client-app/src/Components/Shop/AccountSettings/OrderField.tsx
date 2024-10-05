import React from "react";

interface OrderFieldProps {
    title: string,
    address: string,
    pincode: string,
    city: string
    state: string
    price: string
    image:string
}

const OrderField: React.FC<OrderFieldProps> = ({ title, address, pincode, city, state, price, image }) => {

    return (
        <>
            <div className="flex flex-col bg-gray-100 rounded-md p-8">
                <div className="flex justify-between items-start flex-wrap">
                    <div className="flex gap-4 items-center ">
                        <div className="w-10 h-10 flex justify-center items-center">
                            <img src={image} alt="order picture" className="w-full h-full object-cover rounded-md"/>
                        </div>
                        <div className="font-bold text-black mb-1 text-lg">{title}</div>
                    </div>
                    <div className="flex flex-col md:flex-row text-[24px] gap-4 mt-4 md:mt-0">
                        <div className="text-blue-500 text-xl font-semibold tracking-wider">Rs. {price}</div>
                    </div>
                </div>
                <div className="text-gray-500 font-semibold mt-4 md:mt-2">{address}</div>
                <span className="text-gray-500 font-semibold">{city}, {state} - {pincode}</span>
            </div>
        </>
    )
}

export default OrderField;