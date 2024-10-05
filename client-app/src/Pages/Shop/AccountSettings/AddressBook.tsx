import AddressField from 'Components/Shop/AccountSettings/AddressField';
import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
import BasicModal from 'Components/Shop/AccountSettings/ModalSheet';
import React, { useState } from 'react';

const AddressBook: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className=" bg-white p-2 text-left flex flex-col">
      <div className='flex justify-between mb-4 items-center'>
        <h2 className="text-xl font-semibold mb-4 text-black">Your Addresses</h2>
        <div><button className='text-sky-600 bg-transparent border-blue-500' onClick={handleOpenModal}>+ Add New Address</button></div>
      </div>

      <div className='flex flex-col gap-6'>
        <AddressField title='Home' address='345P-34, Sector 45, Near main market' state='Haryana' city='Gurgaon' pincode='122003' />
        <AddressField title='Office Address' address='5th Floor, Horizon one centre, Golf course road' state='Haryana' city='Gurgaon' pincode='122002' />
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
                            <OptionInput label="City" placeholder="Md" options={['Sm', 'District', 'Country', 'State', 'Md']} /> 
                            <OptionInput label="State" placeholder="Md" options={['HM', 'Md', 'DL', 'NY']} />
                            <OptionInput label="PIN code" placeholder="Md" options={['122001', '122002', '122003', '122004', '122005']} />
                        </div>
                        <div className="flex items-center justify-end mt-5">
                            <button type="button" className="text-gray-500 bg-transparent font-semibold">Cancel</button>
                            <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-md">Save Changes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>

    </div>
  );
};

export default AddressBook;
