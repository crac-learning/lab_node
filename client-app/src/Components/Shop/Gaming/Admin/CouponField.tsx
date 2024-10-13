import React, { useState } from "react";

import { FormInput } from "Components/Shop/AccountSettings/FormFields";
import BasicModal from "Components/Shop/ModalSheet";

interface OrderFieldProps {
    name: string,
    type:string, 
    value:number,
    limit: string
}

const CouponField: React.FC<OrderFieldProps> = ({ name, type, value, limit }) => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal2 = () => setOpenModal2(true);
    const handleCloseModal2 = () => setOpenModal2(false);

    
  // Radio button states
  const [discountType, setDiscountType] = useState<typeof type>(type);
  const [usageLimitation, setUsageLimitation] = useState<typeof limit>(limit);


     <BasicModal
        open={openModal}
        onClose={handleCloseModal}
      >
        <div className="text-sm p-2">
          <div className="flex justify-between items-center mb-8">
            <div className='text-[#9077D2] font-medium text-xl'> Edit Coupon</div>
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


    return (
        <>
            <div className="flex flex-col bg-gray-100 rounded-md shadow-md p-8 text-black">
                <div className="flex justify-between items-center ">
                    <div className="mb-1 text-[22px] font-semibold ">{name}</div>
                    <div className="flex flex-col md:flex-row text-[20px] gap-4">
                        <div className="text-[#9077D2] cursor-pointer" onClick={handleOpenModal}>Edit</div>
                        <div className="text-[#C71313] cursor-pointer" onClick={handleOpenModal2}>Delete</div>
                    </div>
                </div>
                <span className="text-[22px] font-normal">{type} Discount: <span className="font-semibold">{value}%</span></span>
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
                <FormInput placeholder={value.toString()} label='Discount Value' type='text' />

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
                  <div>Unimited</div>
                </div>
              </div>
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
                        <div> Delete Coupon </div>
                        <div onClick={handleCloseModal2} className="cursor-pointer"> X </div>
                    </div>
                    <form>
                        <div className="text-center text-black">Are you sure you want to delete the </div>
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-black"> <b>coupon</b>? </span>
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

export default CouponField;