import React, { useEffect, useRef, useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import BasicModal from "../ModalSheet";
import { FormInput, OptionInput } from "./FormFields";
import CustomButton from "../CustomButton";


interface PaymentFieldProps {
    active: boolean;
    image: string;
    number: string;
    expiry_date: string;
    isActive: boolean; // Prop to check if this menu is active
    onMenuToggle: () => void; // Prop for toggling menu
    onClick: () => void; // Prop for handling click on the active indicator
}

const PaymentField: React.FC<PaymentFieldProps> = ({ active, image, number, expiry_date, isActive, onMenuToggle, onClick }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node))
                onMenuToggle();
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [onMenuToggle]);


    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal2 = () => setOpenModal2(true);
    const handleCloseModal2 = () => setOpenModal2(false);

    return (
        <>
            <div className="flex bg-gray-50 rounded-md p-4 border border-black justify-between items-center">
                <div className="flex gap-8 items-center justify-center">
                    <div onClick={onClick} className={`${active ? 'border-[#01E538] border-[6px]' : 'border-[#555172] border-4'} flex items-center rounded-full w-5 h-5 bg-white`}></div>
                    <div className="w-10 h-10 flex justify-center items-center">
                        <img src={image} alt="card" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col justify-center items-start flex-wrap text-black font-medium mb-1 text-sm">
                        <div> **** **** **** {number}</div>
                        <div className="font-normal">Expiry {expiry_date}</div>
                    </div>
                </div>
                <div className="relative">
                    <PiDotsThreeOutlineFill onClick={onMenuToggle} className="text-[#555172] cursor-pointer" />

                    {isActive && ( // Use the number to identify the active menu
                        <div ref={menuRef} className="absolute right-0 bg-white shadow-lg rounded-md w-40 font-medium text-black">
                            <div onClick={handleOpenModal} className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-b">Edit</div>
                            <div onClick={handleOpenModal2} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Delete</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Modal */}
            <BasicModal open={openModal} onClose={handleCloseModal}>
                <div className="text-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div className='text-[#9077D2] font-medium text-xl'>Edit your payment method</div>
                        <div onClick={handleCloseModal} className="cursor-pointer">X</div>
                    </div>
                    <form>
                        <OptionInput label="Payment Type" placeholder="Credit/Debit Card" options={['Credit Only', 'UPI', 'Netbanking', 'Credit/Debit Card', 'Debit Only']} /><br />
                        <FormInput label="Card Number" placeholder="**** **** **** ****" type="text" /><br />
                        <FormInput label="Name on Card" placeholder="Enter your name" type="text" /><br />
                        <FormInput label="Expiry Date" placeholder="MM/YYYY" type="text" /><br />
                        <div className="flex items-center gap-2 justify-end mt-4 pr-8">
                            <CustomButton label="Cancel"/>
                            <CustomButton label="Save Changes"/>
                        </div>
                    </form>
                </div>
            </BasicModal>

            {/* Delete Modal */}
            <BasicModal open={openModal2} onClose={handleCloseModal2}>
                <div className="text-lg">
                    <div className="flex justify-between items-center font-medium text-blue-500 mb-6">
                        <div>Delete Payment Method</div>
                        <div onClick={handleCloseModal2} className="cursor-pointer text-[#9077D2]">X</div>
                    </div>
                    <form>
                        <div className="text-center text-black">Are you sure you want to delete the </div>
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-black"> <b>Payment</b> address? </span>
                        </div>
                        <div className="flex items-center justify-around mt-5">
                            <CustomButton label="No"/>
                            <CustomButton label="Yes"/>
                        </div>
                    </form>
                </div>
            </BasicModal>
        </>
    );
};

export default PaymentField;
