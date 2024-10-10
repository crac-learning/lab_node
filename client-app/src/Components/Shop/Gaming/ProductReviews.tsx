import { RxPerson } from "react-icons/rx";

// Custom component for product reviews
export const ProductReviews: React.FC = () => {
    const reviews = [
        {
            name: "Avinash",
            text: "This product is very good. The quality is really good according to the price. This is worth the money for a usual gamer."
        },
        {
            name: "Avinash",
            text: "The remote is quite bulky and sometimes uncomfortable to handle."
        },
        {
            name: "Omkar",
            text: "Best gamepad in this price range."
        }
    ];

    return (
        <div className='flex flex-col text-black py-6 gap-6 w-full'>
            {reviews.map((review, index) => (
                <div className='flex gap-3' key={index}>
                    <div>
                        <RxPerson className='text-white border bg-[#9077D2] rounded-full p-2' size={35} />
                    </div>
                    <div className='flex flex-col text-left'>
                        <div className='mb-2 font-semibold text-base'>{review.name}</div>
                        <div className='font-semibold text-[12px]'>{review.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};