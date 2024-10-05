import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
import BasicModal from 'Components/Shop/AccountSettings/ModalSheet';
import PaymentField from 'Components/Shop/AccountSettings/PaymentField';
import React, { useState } from 'react';

const PaymentOptions : React.FC = () => {

  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const paymentMethods = [
      { id: '1', image: "../../../Assets/images/payment_1.png", number: '3456', expiry_date: '12/25', active: true },
      { id: '2', image: "../../../Assets/images/payment_2.png", number: '7654', expiry_date: '11/24', active: false },
      { id: '3', image: "../../../Assets/images/payment_3.png", number: '7980', expiry_date: '06/25', active: false },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  const handleMenuToggle = (id: string) => {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
};


  return (
    <div className=" bg-white p-2 text-left flex flex-col">
    <div className='flex justify-between mb-4 items-center'>
      <h2 className="text-xl font-semibold mb-4 text-black">Payment Methods</h2>
      <div><button className='text-sky-600 bg-transparent border-blue-500' onClick={handleOpenModal}>+ Add New Method</button></div>
    </div>

    <div className='flex flex-col'>
    {paymentMethods.map((method) => (
                <PaymentField
                    key={method.id}
                    active={method.active}
                    image={method.image}
                    number={method.number}
                    expiry_date={method.expiry_date}
                    isActive={activeMenuId === method.id}
                    onMenuToggle={() => handleMenuToggle(method.id)}
                />
            ))}
    </div>
    <BasicModal open={openModal} onClose={handleCloseModal}>
                <div className="text-sm">
                    <div className="flex justify-between items-center font-bold text-blue-500 mb-6">
                        <div>Add New Method</div>
                        <div onClick={handleCloseModal} className="cursor-pointer">X</div>
                    </div>
                    <form>
                        <OptionInput label="Payment Type" placeholder="Credit/Debit Card" options={['Credit Only', 'UPI', 'Netbanking', 'Credit/Debit Card', 'Debit Only']} /><br/ >
                        <FormInput label="Card Number" placeholder="**** **** **** ****" type="text" /><br />
                        <FormInput label="Name on Card" placeholder="Enter your name" type="text" /><br />
                        <FormInput label="Expiry Date" placeholder="MM/YYYY" type="text" /><br />
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

export default PaymentOptions;
