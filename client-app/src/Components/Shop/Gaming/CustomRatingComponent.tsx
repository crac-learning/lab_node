import React, { useState } from 'react';
import { TiStarFullOutline } from "react-icons/ti";
// import { IoIosStar } from "react-icons/io";

const CustomStarRating: React.FC = () => {
    const [value, setValue] = useState<number>(2); // Default value

    const handleClick = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleClick(star)} className='cursor-pointer'>
                    {star <= value ? (
                        <TiStarFullOutline size={24} className="text-[#FFAD33]" /> // filled star
                    ): ( 
                        <TiStarFullOutline size={24} className="text-gray-400"/> // outline star
                    )}

                </span>
            ))}
        </div>
    );
};

export default CustomStarRating;
