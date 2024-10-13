import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
import BasicModal from 'Components/Shop/ModalSheet';
import PaymentField from 'Components/Shop/AccountSettings/PaymentField';
import React, { useState } from 'react';

// Importing images
import paymentImage1 from '../../../Assets/images/payment_1.png';
import paymentImage2 from '../../../Assets/images/payment_2.png';
import paymentImage3 from '../../../Assets/images/payment_3.png';

const PaymentOptions: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);


  const paymentMethods = [
    { id: '1', image: paymentImage1, number: '3456', expiry_date: '12/25', active: true },
    { id: '2', image: paymentImage2, number: '7654', expiry_date: '11/24', active: false },
    { id: '3', image: paymentImage3, number: '7980', expiry_date: '06/25', active: false },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleMenuToggle = (id: string) => {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
  };

  const handlePaymentMethodClick = (id:string) => {
    setActivePaymentMethod((prevId) => (prevId === id ?  null : id));
  }

  return (
    <div className="bg-white p-2 text-left flex flex-col w-full">
      <div className='flex justify-between mb-4 items-center'>
        <h2 className="text-xl font-medium mb-4 text-black">Payment Methods</h2>
        <div>
          <button className='text-[#9077D2] bg-transparent border-[#9077D2] px-8 py-4' onClick={handleOpenModal}>
            + Add New Method
          </button>
        </div>  
      </div>

      <div className='flex flex-col gap-6 mt-4'>
        {paymentMethods.map((method) => (
          <PaymentField
            key={method.id}
            active={method.id === activePaymentMethod}
            image={method.image}
            number={method.number}
            expiry_date={method.expiry_date}
            isActive={activeMenuId === method.id}
            onMenuToggle={() => handleMenuToggle(method.id)}
            onClick={() => handlePaymentMethodClick(method.id)} // pass click handler
          />
        ))}
      </div>
      <BasicModal open={openModal} onClose={handleCloseModal}>   
        {/* modal sheet  */}
        <div className="text-sm p-2"> 
          <div className="flex justify-between items-center mb-8">
            <div className='text-[#9077D2] font-medium text-xl'>Add New Method</div>
            <div onClick={handleCloseModal} className="cursor-pointer text-[#9077D2]">X</div>
          </div>
          <form>
            <OptionInput label="Payment Type" placeholder="Credit/Debit Card" options={['Credit Only', 'UPI', 'Netbanking', 'Credit/Debit Card', 'Debit Only']} /><br />
            <FormInput label="Card Number" placeholder="**** **** **** ****" type="text" /><br />
            <FormInput label="Name on Card" placeholder="Enter your name" type="text" /><br />
            <FormInput label="Expiry Date" placeholder="MM/YYYY" type="text" /><br />
            <div className="flex items-center justify-end gap-2 mt-4 pr-8">
              <button type="button" className="text-black bg-transparent font-normal">Cancel</button>
              <button type="submit" className="bg-[#9077D2] text-white px-12 py-4 font-medium rounded-md">Save Changes</button>
            </div>
          </form>
        </div>
      </BasicModal>
    </div>
  );
};

export default PaymentOptions;
