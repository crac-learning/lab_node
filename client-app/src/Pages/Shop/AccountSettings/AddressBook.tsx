import AddressField from 'Components/Shop/AccountSettings/AddressField';
import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
import BasicModal from 'Components/Shop/ModalSheet';
import React, { useState } from 'react';

const AddressBook: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className=" bg-white p-2 text-left flex flex-col w-full">
      <div className='flex justify-between mb-4 items-center'>
        <h2 className="text-xl font-medium mb-4 text-black">Your Addresses</h2>
        <div><button className='text-[#9077D2] bg-transparent border-[#9077D2] px-8 py-4' onClick={handleOpenModal}>+ Add New Address</button></div>
      </div>

      <div className='flex flex-col gap-6 mt-4'>
        <AddressField title='Home' address='345P-34, Sector 45, Near main market' state='Haryana' city='Gurgaon' pincode='122003' />
        <AddressField title='Office Address' address='5th Floor, Horizon one centre, Golf course road' state='Haryana' city='Gurgaon' pincode='122002' />
      </div>

      <BasicModal
        open={openModal}
        onClose={handleCloseModal}
      >
        <div className="text-sm p-2">
          <div className="flex justify-between items-center mb-8">
            <div className='text-[#9077D2] font-medium text-xl'> Add Your Address</div>
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

    </div>
  );
};

export default AddressBook;
