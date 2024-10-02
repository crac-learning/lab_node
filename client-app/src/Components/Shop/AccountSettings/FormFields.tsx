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
            <label className="block text-gray-600 text-left font-bold mb-1">{label}</label>
            <input type={type} className="w-full border border-gray-300 p-2 rounded-md bg-gray-100" placeholder={placeholder} />
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
            <label className="block text-gray-600 text-left font-bold mb-1">{label}</label>
            <select
                className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
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