import React, { useState } from "react";
import BasicModal from "../ModalSheet";
import { BillingField } from "../Gaming/Cart/BillingFields";

interface OrderFieldProps {
    title: string,
    address: string,
    pincode: string,
    city: string
    name?: string,
    contact?: string,
    state: string,
    price: number,
    image: string,
    email: string,
    quantity?: number,
    onClick?: () => void // optional click handler for viewing/ updating orders ( ADMIN )
}

const OrderField: React.FC<OrderFieldProps> = ({ title, address, pincode, city, name, contact, state, price, image, email, quantity, onClick }) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpenModal = () => setShowModal(true)

    const handleCloseModal = () => setShowModal(false);

    const sum = (quantity || 1)  * price;

    const discount = 300;

    const finalAmount = sum - discount;

    return (
        <>
            <div className={`flex flex-col bg-gray-100 rounded-md p-8 shadow-md ${onClick ? 'cursor-pointer' : ''}`}
                onClick={handleOpenModal}>
                <div className="flex justify-between items-start flex-wrap">
                    <div className="flex gap-4 items-center ">
                        <div className="w-10 h-10 flex justify-center items-center">
                            <img src={image} alt="order picture" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="font-medium text-black mb-1 text-[22px]">{title}</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        <div className="text-[#9077D2] text-2xl font-semibold tracking-wider">Rs. {price}</div>
                    </div>
                </div>
                <div className="flex justify-start items-center w-full mt-4">
                    {name ? (
                        <div className="flex flex-col w-max text-black mt-2 pr-8 text-xl">
                            <div className="font-semibold *:mb-1">{name}</div>
                            <div className="font-medium ">{contact}</div>
                        </div>
                    ) : null}

                    {name && <div className="w-[1px] h-3/4 bg-black mx-6" />}

                    <div className="flex flex-col">
                        <div className="text-gray-500 font-medium text-xl mt-4 md:mt-2">{address}</div>
                        <span className="text-gray-500 font-medium text-xl">{city}, {state} - {pincode}</span>
                    </div>

                </div>
            </div>

            {showModal && (
                <BasicModal open={showModal} onClose={handleCloseModal}>
                    {/* modal sheet  */}
                    <div className="text-sm p-6 font-medium text-black">
                        <div className="flex justify-between items-center mb-6">
                            <div className='text-[#9077D2] text-xl'>Update Order</div>
                            <div onClick={handleCloseModal} className="cursor-pointer text-[#9077D2]">X</div>
                        </div>
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex flex-col">
                                <div className="mb-2 font-semibold">Name of Customer</div>
                                <div>{name}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-2 font-semibold">Email</div>
                                <div>{email}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-2 font-semibold">Phone Number</div>
                                <div>{name}</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mb-2">Product List</div>
                        </div>
                        <div className="grid grid-cols-4 text-center p-4 border-b border-[#0000000D] text-black bg-[#D9D9D9] mb-2">
                            <p className='text-left'>Items</p>
                            <p>Price</p>
                            <p>Qty</p>
                            <p className="text-right pr-[70px]">Total</p>
                        </div>

                        <div

                            className="grid grid-cols-4 text-center items-center p-2 font-medium text-black mb-12"
                        >
                            {/* Product details */}
                            <div className="flex items-center justify-start gap-2">
                                {/* Image */}
                                <img
                                    src={image}
                                    alt={title}
                                    className="h-12 w-12 object-contain"
                                />
                                {/* Product title */}
                                <p className="">{title}</p>
                            </div>

                            {/* Price */}
                            <p>${price}</p>

                            {/* Quantity */}
                            <div>{quantity}</div>
                            
                            {/* Subtotal */}
                            <p>{sum}</p>
                        </div>

                        <div className='flex justify-end mt-12'>
                            <div className='flex p-8 mt-2 flex-col items-end text-black font-medium gap-6 w-1/2 text-base'>
                                <BillingField label='Subtotal' value={sum.toString()} />
                                <BillingField label='Discount (FIRST20)' value={discount.toString()} />
                                <BillingField label='Shipping' value='Free' />
                                <BillingField label='Total' value={finalAmount.toString()} />

                                <div className="flex">
                                    <button className=" bg-[#9077D2] text-white py-3 px-12 font-semibold rounded" onClick={handleCloseModal}>
                                        Cancel order
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>  

                </BasicModal >
            )}
        </>
    )
}

export default OrderField;