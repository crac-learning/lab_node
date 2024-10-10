import React from 'react'
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const ReviewContainer: React.FC = () => {
    const [value, setValue] = React.useState<number | null>(2);


    return (
        <>
            <div className='container flex flex-col w-full'>
                <div className='flex gap-2 flex-row items-center p-4'>
                    <div className='bg-[#9077D2] rounded-md h-10 w-5'></div>
                    <div className='text-[#9077D2] font-bold'>Leave a review</div>

                </div>
                <div className='flex flex-col gap-2 items-start mt-4 pl-12 w-full pr-10'>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(_event, newValue) => {
                                setValue(newValue);
                            }}
                            // max={5}
                            emptyIcon={<StarIcon style={{ opacity: 0.5, color: 'gray', fontSize: 24 }} />}
                            size='medium'
                        />
                    </Box>

                    <div className='w-full'>
                        <textarea name="review_box" id="" placeholder='Write a review' className='text-black placeholder:font-extralight bg-white border rounded-md border-black w-full '></textarea>
                    </div>

                    <div className='flex self-end bg-[#9077D2] text-white px-8 py-2 rounded-md mt-2'>
                        Submit
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewContainer