import React, { useState } from 'react'

import CouponField from 'Components/Shop/Gaming/Admin/CouponField';
import BasicModal from 'Components/Shop/ModalSheet';
import { FormInput } from 'Components/Shop/AccountSettings/FormFields';

const AdminCoupons: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Radio button states
  const [discountType, setDiscountType] = useState<'Percentage' | 'Fixed'>('Percentage');
  const [usageLimitation, setUsageLimitation] = useState<'One Time' | 'Unlimited'>('One Time');

  return (
    <div className="bg-white text-left flex flex-col w-full">
      <div className='flex justify-between mb-8 items-center'>
        <h2 className="text-xl font-medium mb-4 text-[#9077D2]">Coupons List</h2>
        <div><button className='text-[#9077D2] bg-transparent border-[#9077D2] px-8 py-4 font-semibold' onClick={handleOpenModal}>+ Add New Coupon</button></div>
      </div>

      <div className='flex flex-col gap-6'>
        <CouponField name='FIRST20' limit='Unlimited' type='Percentage' value={20} />
        <CouponField name='OFFER50' limit='One Time' type='Fixed' value={50} />
      </div>

      <BasicModal
        open={openModal}
        onClose={handleCloseModal}
      >
        <div className="text-sm p-2">
          <div className="flex justify-between items-center mb-8">
            <div className='text-[#9077D2] font-medium text-xl'> Add New Coupon</div>
            <div onClick={handleCloseModal} className="cursor-pointer text-[#9077D2]">X</div>
          </div>
          <form>
            <FormInput label="Coupon Name" placeholder="FLAT200 OFF" type="text" />
            <br />

            {/* Discount Type */}

            <div className='flex flex-col text-black'>
              <div className='font-medium mb-2'>Discount Type</div>
              <div className='flex gap-12 mb-8'>
                <div className='flex gap-2 cursor-pointer'
                  onClick={() => setDiscountType('Percentage')}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${discountType === 'Percentage' ? 'border-[#01E538]' : 'border-black'}`}
                  ></div>
                  <div>Percentage</div>
                </div>
                <div
                  className='flex gap-2 cursor-pointer'
                  onClick={() => setDiscountType('Fixed')}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${discountType === 'Fixed' ? 'border-[#01E538]' : 'border-black'}`}
                  ></div>
                  <div>Fixed</div>
                </div>

              </div>
            </div>

            <div className="flex justify-between w-full gap-12 mb-8">
              <div className='w-1/2'>
                <FormInput placeholder='200' label='Discount Value' type='text' />

              </div>
              <div className='w-1/2'>
                <FormInput placeholder='200' label='Minimum Cart Value' type='text' />
              </div>
            </div>


            {/* Usage Limitation */}
            <div className='flex flex-col text-black'>
              <div className='font-medium mb-2'>Usage Limitation</div>
              <div className='flex gap-12'>
                {/* One Time Option */}
                <div
                  className='flex gap-2 cursor-pointer'
                  onClick={() => setUsageLimitation('One Time')}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${usageLimitation === 'One Time' ? 'border-[#01E538]' : 'border-black'}`}
                  ></div>
                  <div>One Time</div>
                </div>

                {/* Limited Option */}
                <div
                  className='flex gap-2 cursor-pointer'
                  onClick={() => setUsageLimitation('Unlimited')}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${usageLimitation === 'Unlimited' ? 'border-[#01E538]' : 'border-black'}`}
                  ></div>
                  <div>Limited</div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </BasicModal>

    </div>
  )
}

export default AdminCoupons