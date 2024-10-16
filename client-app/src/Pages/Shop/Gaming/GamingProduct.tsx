import React, { useState } from 'react';
import view_1 from "../../../Assets/images/view_1.png";
import view_2 from "../../../Assets/images/gaming_prod_2.png";
import view_3 from "../../../Assets/images/gaming_prod_3.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IProduct } from 'Utils/types';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ProductFeatures } from 'Components/Shop/Gaming/ProductDescription';
import { useNavigate } from 'react-router-dom';
import { GAMING_CART } from 'Routes/constant';
import ProductBuyButton from 'Components/Shop/ProductBuyButton';

interface IProductNew extends IProduct {
    quantity: number;
    count_of_reviews: number;
    star_rating: number;
}

const gaming_products: IProductNew[] = [
    // Sample product data
    {
        sku: '123', title: 'Havic HV G-92 Gamepad', banner: view_1, price: 192.00,
        _id: '',
        images: [view_1, view_2, view_3],
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        mrp: 0,
        category: '',
        gender: '',
        originalLink: '',
        reviews: [],
        quantity: 2,
        count_of_reviews: 150,
        star_rating: 4
    },
    // Add more products here...
];



const GamingProduct: React.FC = () => {
    const [value, setValue] = useState<number | null>(gaming_products[0].star_rating);
    const [btnColor, setBtnColor] = useState<boolean[]>(gaming_products.map(()=>false));
    const [quantities, setQuantities] = useState<number[]> (gaming_products.map(p => p.quantity));
    

    const incrementQty = (index: number) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] +=1;
        setQuantities(updatedQuantities);
    }

    const decrementQty = (index: number) => {
        const updatedQuantities = [...quantities];
        if(updatedQuantities[index] > 0)
            updatedQuantities[index] -=1
        
        setQuantities(updatedQuantities);
    }

    const handleBtnColor = (index: number) => {
        const updatedBtnColors = [...btnColor];
        updatedBtnColors[index] = !updatedBtnColors[index];
        setBtnColor(updatedBtnColors);
    };


    const navigate = useNavigate();

    return (
        <>
        
        <div className='flex flex-col mt-8'>
            {gaming_products.map((product, index) => (
                <div key={product._id} className='flex'>
                    <div className='flex bg-[#F5F5F5] h-[600px] w-2/3'>
                        <img src={product.banner} alt="" className='object-contain w-full h-full' />
                    </div>
                    <div className='flex flex-col pl-8 w-1/2'>
                        <div className='flex text-black text-2xl font-semibold'>{product.title}</div>
                        <div className='flex flex-row gap-3 mt-3 text-sm text-black'>
                            <div className='flex gap-2'>
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Rating
                                        name={`controlled-rating-${index}`}
                                        value={value}
                                        onChange={(_event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        max={5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.5, color: 'gray', fontSize: 18 }} />}
                                        size='small'
                                    />
                                </Box>
                                ({product.count_of_reviews} Reviews)
                            </div>
                            <div> | </div>
                            <div className='text-[#00FF66] font-medium'>In Stock</div>
                        </div>
                        <div className='flex text-black font-medium text-2xl mt-3'>$ {product.price.toFixed(2)}</div>
                        <div className='flex text-black mt-3 font-normal text-sm text-left '>{product.description}</div>
                        <hr className='my-6 h-[1px] border-0 w-full bg-black' />

                        {/* Quantity, Buy button, and Wishlist */}
                        <div className='flex justify-between items-center mb-12 w-full px-4  '>
                            <div className='flex flex-row border border-black rounded-md text-black justify-between items-center'>
                                <ProductBuyButton label='-' isActive={!btnColor[index]} onClick={()=> {decrementQty(index); handleBtnColor(index);
                                     }}/>
                                <div className='px-6'>{product.quantity}</div>
                                <ProductBuyButton label='+' isActive={btnColor[index]} onClick={()=> {incrementQty(index); handleBtnColor(index);}}/>
                            </div>
                            <div className='flex gap-6'>
                                <button className='bg-[#9077D2] py-2 w-[188px] rounded-md text-base text-white font-semibold' onClick={()=>navigate(GAMING_CART)}>Buy Now</button>
                                <div className='border border-black p-2 rounded-md text-black flex items-center'><IoIosHeartEmpty size={20} /></div>
                            </div>
                        </div>

                        {/* Custom feature container */}
                        <div className='pr-4'>
                        <ProductFeatures />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        </>
    );
};

export default GamingProduct;
