import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import BasicModal from "../ModalSheet";
import { FormInput, OptionInput } from "./FormFields";

interface AddressFieldProps {
    title: string,
    address: string,
    pincode: string,
    city: string
    state: string
}

const AddressField: React.FC<AddressFieldProps> = ({ title, address, pincode, city, state }) => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal2 = () => setOpenModal2(true);
    const handleCloseModal2 = () => setOpenModal2(false);

    return (
        <>
            <div className="flex flex-col bg-gray-100 rounded-md p-8 font-medium">
                <div className="flex justify-between items-center ">
                    <div className=" text-black mb-1 ">{title}</div>
                    <div className="flex flex-col md:flex-row text-[20px] gap-4">
                        <FiEdit className="text-[#9077D2] cursor-pointer" onClick={handleOpenModal} />
                        <HiOutlineTrash className="text-[#9077D2] cursor-pointer" onClick={handleOpenModal2} />
                    </div>
                </div>
                <div className="text-gray-500 text-xl">{address}</div>
                <span className="text-gray-500 text-xl">{city}, {state} - {pincode}</span>
            </div>

            <BasicModal
                open={openModal}
                onClose={handleCloseModal}
            >
                <div className="text-sm p-2">
                    <div className="flex justify-between items-center text-[#9077D2] font-medium mb-8">
                        <div className="text-xl"> Edit Your Address</div>
                        <div onClick={handleCloseModal} className="cursor-pointer text-[#9077D2]">X</div>
                    </div>
                    <form>
                        <FormInput label="Name of place" placeholder="Name your address" type="text" />
                        <br />
                        <FormInput label="Address" placeholder="Your Address" type="text" /> <br />
                        <FormInput placeholder="Apartment, suite, etc. (optional)" type="text" /> <br />
                        <div className="flex justify-between gap-12">
                            <div className='w-1/3'>
                                <OptionInput label="City" placeholder="Md" options={['Sm', 'District', 'Country', 'State', 'Md']} />
                            </div>
                            <div className='w-1/3'>
                                <OptionInput label="State" placeholder="Md" options={['HM', 'Md', 'DL', 'NY']} />
                            </div>
                            <div className='w-1/3'>
                                <OptionInput label="PIN code" placeholder="Rimel" options={['122001', '122002', '122003', '122004', '122005']} />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-8 pr-8">
                            <button type="button" className="text-black bg-transparent font-normal">Cancel</button>
                            <button type="submit" className="bg-[#9077D2] text-white px-12 py-4 font-medium rounded-md">Save Changes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>

            <BasicModal
                open={openModal2}
                onClose={handleCloseModal2}
            >
                <div className="text-lg">
                    <div className="flex justify-between items-center mb-6 text-[#9077D2] font-medium">
                        <div> Delete Address </div>
                        <div onClick={handleCloseModal2} className="cursor-pointer"> X </div>
                    </div>
                    <form>
                        <div className="text-center text-black">Are you sure you want to delete the </div>
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-black"> <b>Home</b> address? </span>
                        </div>
                        <div className="flex items-center justify-around mt-5">
                            <button type="button" className="text-gray-500 bg-transparent font-semibold">No</button>
                            <button type="submit" className="bg-sky-600 text-white px-12 py-4 rounded-md">Yes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>
        </>
    )
}

export default AddressField;