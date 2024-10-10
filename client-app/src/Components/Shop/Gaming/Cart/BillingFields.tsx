import React from "react";

interface BillingFieldProps {
    label: string;
    value: string;
}

export const BillingField: React.FC<BillingFieldProps> = ({ label, value }) => {
    return (
        <>
            <div className='flex justify-between w-full'>
                <div>{label}:</div>
                <div className=''>${value}</div>
            </div>
            
        </>
    )
}