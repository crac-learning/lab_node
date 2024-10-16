import React, { useState } from 'react'
import { IProduct } from 'Utils/types';

import image1 from "Assets/images/order_1.png"
import image2 from "Assets/images/product_2.png"
import image3 from "Assets/images/product_3.png"

import ProductBox from 'Components/Shop/ProductBox';
import BasicModal from 'Components/Shop/ModalSheet';
import { FormInput, OptionInput } from 'Components/Shop/AccountSettings/FormFields';
// import { FiUpload } from 'react-icons/fi';
import CustomButton from 'Components/Shop/CustomButton';
import ImageUpload from 'Components/Shop/ImageUpload';

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
        sku: '128', title: 'Product 2', banner: image2, price: 450,
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


const AdminProduct: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]); // Store uploaded files
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className="bg-white text-left flex flex-col w-[95%]">

            <div className='flex justify-between mb-8 items-center'>
                <h2 className="text-xl font-medium mb-4 text-[#9077D2]">Product List</h2>
                <div> <button className='text-[#9077D2] bg-transparent border-[#9077D2] px-8 py-4' onClick={handleOpenModal} >+ Add New Product</button></div>
            </div>
            <div className='grid grid-cols-3 gap-6 '>
                {wishlistProducts.map((product) => (
                    <div key={product.sku}>
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
                            <ImageUpload
                                onImageChange={(files) => setUploadedImages(files)} // Handle image changes
                                uploadedImages={uploadedImages.map(file => URL.createObjectURL(file))} // Convert File objects to URLs for preview
                            />
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
                            <CustomButton label="Cancel"/>
                            <CustomButton label="Save Changes"/>
                        </div>

                    </form>
                </div>
            </BasicModal>

        </div>


    )
}

export default AdminProduct;