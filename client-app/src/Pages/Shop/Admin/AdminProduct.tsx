import React, { useState } from 'react'
import { IProduct } from 'Utils/types';

import image1 from "Assets/images/order_1.png"
import image2 from "Assets/images/product_2.png"
import image3 from "Assets/images/product_3.png"

import ProductBox from 'Components/Shop/ProductBox';
import BasicModal from 'Components/Shop/ModalSheet';
import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
import { FiUpload } from 'react-icons/fi';

const wishlistProducts: IProduct[] = [
    // Sample product data
    {
        sku: '123', title: 'Product 1', banner: image1, price: 100,
        _id: '',
        images: [],
        description: '',
        mrp: 0,
        category: '',
        gender: '',
        originalLink: '',
        reviews: []
    },
    {
        sku: '124', title: 'Product 2', banner: image2, price: 200,
        _id: '',
        images: [],
        description: '',
        mrp: 0,
        category: '',
        gender: '',
        originalLink: '',
        reviews: []
    },
    {
        sku: '125', title: 'Product 3', banner: image3, price: 300,
        _id: '',
        images: [],
        description: '',
        mrp: 0,
        category: '',
        gender: '',
        originalLink: '',
        reviews: []
    },
    {
        sku: '124', title: 'Product 2', banner: image2, price: 450,
        _id: '',
        images: [],
        description: '',
        mrp: 0,
        category: '',
        gender: '',
        originalLink: '',
        reviews: []
    },
    // Add more products here...
];


const uploadImages = 

[ {}, {}, {}, {}, {}];


const AdminProduct: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className="bg-white text-left flex flex-col w-[95%]">

            <div className='flex justify-between mb-8 items-center'>
                <h2 className="text-xl font-medium mb-4 text-[#9077D2]">Product List</h2>
                <div> <button className='text-[#9077D2] bg-transparent border-[#9077D2] px-8 py-4' onClick={handleOpenModal} >+ Add New Product</button></div>
            </div>
            <div className='flex flex-wrap gap-6 '>
                {wishlistProducts.map((product) => (
                    <div className='flex-basis-1/3'>
                        <ProductBox product={product} key={product.sku} />
                    </div>
                ))}
            </div>

            <BasicModal
                open={openModal}
                onClose={handleCloseModal}
            >
                <div className="text-sm p-2">
                    <div className="flex justify-between items-center mb-8">
                        <div className='text-[#9077D2] font-medium text-xl'> Add New Product</div>
                        <div onClick={handleCloseModal} className="cursor-pointer text-[#9077D2]">X</div>
                    </div>
                    <form>
                        <div className='w-full font-medium mb-6'>
                            <label htmlFor="description" className='block text-black text-left mb-2'>Banner & Other Images</label>
                            <div className='flex gap-2 justify-start items-center'>
                            {uploadImages.map(_ => (
                                <div className='cursor-pointer flex bg-[#9077D2] w-[60px] h-[60px] p-10 rounded justify-center items-center'>
                                    <div className='flex font-bold text-white'>
                                        <FiUpload size={40}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <FormInput label="Product Title" placeholder="Enter product name" type="text" />
                        <br />
                        <div className='w-full font-medium' >
                            <label htmlFor="description" className='block text-black text-left mb-1'>Description</label>
                            <textarea name="description" id="description" placeholder='Write description....' className='px-3 py-4 mb-2 text-black placeholder:font-extralight bg-[#f5f5f5] rounded w-full'>
                            </textarea>
                        </div>
                        <div className="flex justify-between w-full mt-2 gap-12 mb-6">
                            <div className='w-1/2'>
                                <OptionInput label="Select Category" placeholder="Shoes..." options={['Shoes', 'Watch', 'Shirt', 'Jeans']} />
                            </div>
                            <div className='w-1/2'>
                                <OptionInput label="Select Gender" placeholder="Men..." options={['Men', 'Women', 'Others']} />
                            </div>
                        </div>
                        <div className="flex justify-between w-full gap-12">
                            <div className='w-1/2'>
                                <FormInput placeholder='20000' label='MRP of the product' type='text' />

                            </div>
                            <div className='w-1/2'>
                                <FormInput placeholder='15000' label='Selling Price (Must be less than MRP)' type='text' />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-8">
                            <button type="button" className="text-black bg-transparent font-normal">Cancel</button>
                            <button type="submit" className="bg-[#9077D2] text-white px-12 py-4 font-medium rounded-md">Save Changes</button>
                        </div>

                    </form>
                </div>
            </BasicModal>

        </div>


    )
}

export default AdminProduct;