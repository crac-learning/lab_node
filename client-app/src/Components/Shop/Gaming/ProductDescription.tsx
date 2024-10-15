import { GiTakeMyMoney } from "react-icons/gi";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

// Custom component for product features
export const ProductFeatures: React.FC = () => (
    <div className='border border-black rounded-md flex md:flex-col text-black px-4 w-full py-6 mb-12 '>
        <FeatureItem icon={<TbTruckDelivery size={40} />} title="Free Delivery" subtitle="Enter your postal code for Delivery Availability" />
        <hr className='my-4 h-[1px] bg-black border-0' />
        <FeatureItem icon={<PiArrowsCounterClockwise size={40} />} title="Return Delivery" subtitle="Free 30 Days Delivery Returns. Details" />
        <hr className='my-4 h-[1px] bg-black border-0' />
        <FeatureItem icon={<GiTakeMyMoney size={40} />} title="COD Available" subtitle="Cash on delivery available on all orders." />
    </div>
);

// Custom component for each feature item
export const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className='flex items-center gap-4'>
        <div>{icon}</div>
        <div className='flex flex-col text-left'>
            <div className='mb-1 font-[550] text-base'>{title}</div>
            <div className='font-[550] underline text-[12px]'>{subtitle}</div>
        </div>
    </div>
);

