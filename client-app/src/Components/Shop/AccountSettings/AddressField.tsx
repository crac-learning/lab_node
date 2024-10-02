import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import BasicModal from "./ModalSheet";
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
            <div className="flex flex-col bg-gray-100 rounded-md p-8">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-black mb-1">{title}</div>
                    <div className="flex flex-col md:flex-row text-[24px] gap-4">
                        <FiEdit className="text-blue-500 cursor-pointer" onClick={handleOpenModal} />
                        <HiOutlineTrash className="text-blue-500 cursor-pointer" onClick={handleOpenModal2} />
                    </div>
                </div>
                <div className="text-gray-500 font-semibold">{address}</div>
                <span className="text-gray-500 font-semibold">{city}, {state} - {pincode}</span>
            </div>

            <BasicModal
                open={openModal}
                onClose={handleCloseModal}
            >
                <div className="text-sm">
                    <div className="flex justify-between items-center font-bold text-blue-500 mb-6">
                        <div> Add Your Address</div>
                        <div onClick={handleCloseModal} className="cursor-pointer"> X </div>
                    </div>
                    <form>
                        <FormInput label="Name of place" placeholder="Name your address" type="text" />
                        <br />
                        <FormInput label="Address" placeholder="Your Address" type="text" /> <br />
                        <FormInput placeholder="Apartment, suite, etc. (optional)" type="text" /> <br />
                        <div className="flex justify-between">
                            <OptionInput label="City" placeholder="Md" options={['Sm', 'District', 'Country', 'State', 'Md']} /> <br />
                            <OptionInput label="State" placeholder="Md" options={['HM', 'Md', 'DL', 'NY']} /> <br />
                            <OptionInput label="PIN code" placeholder="Md" options={['122001', '122002', '122003', '122004', '122005']} />
                        </div>
                        <div className="flex items-center justify-end mt-5">
                            <button type="button" className="text-gray-500 bg-transparent font-semibold">Cancel</button>
                            <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-md">Save Changes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>

            <BasicModal 
             open ={openModal2}
             onClose={ handleCloseModal2 }
            >
                 <div className="text-lg">
                    <div className="flex justify-between items-center font-bold text-blue-500 mb-6">
                        <div> Delete Address </div>
                        <div onClick={handleCloseModal2} className="cursor-pointer"> X </div>
                    </div>
                    <form>
                        <span className="text-center text-black">Are you sure you want to delete the <b>Home</b> address?</span>
                        <div className="flex items-center justify-around mt-5">
                            <button type="button" className="text-gray-500 bg-transparent font-semibold">No</button>
                            <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-md">Yes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>
        </>
    )
}

export default AddressField;