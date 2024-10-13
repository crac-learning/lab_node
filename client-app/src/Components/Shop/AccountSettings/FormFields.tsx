import React from 'react';

interface FormInputProps {
    label?: string,
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder }) => {
    return (
        <div>
            <label htmlFor={label} className="block text-black text-left font-medium mb-1">{label}</label>
            <input type={type} className="w-full p-4 rounded-md bg-[#f5f5f5] placeholder-neutral-500 text-black mb-2" placeholder={placeholder} />
        </div>
    )
}

interface OptionProps {
    label: string;
    placeholder?: string;
    options: string[];  
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const OptionInput: React.FC<OptionProps> = ({ label, placeholder, options, value, onChange } ) => {

    return (
        <div>
            <label htmlFor={label} className="block text-left text-black font-medium mb-1">{label}</label>
            <select
                className="w-full p-4 rounded-md bg-[#f5f5f5] placeholder-neutral-500 text-black"
                value={value}
                onChange={onChange}
            >
                {/* If a placeholder is provided, show it as the first option */}
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )

}