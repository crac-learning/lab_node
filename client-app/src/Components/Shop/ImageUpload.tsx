import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi'; // Importing the FiUpload icon

interface ImageUploadProps {
    onImageChange: (files: File[]) => void; // Callback for parent component to get the uploaded files
    uploadedImages: string[]; // Array of uploaded images (for preview)
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, uploadedImages }) => {
    const [previewUrls, setPreviewUrls] = useState<string[]>(uploadedImages);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            const newPreviewUrls = filesArray.map(file => URL.createObjectURL(file));

            setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
            onImageChange(filesArray); // Pass the uploaded files to parent
        }
    };

    return (
        <div className="flex flex-wrap gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <label key={index} className="cursor-pointer flex flex-col justify-center items-center bg-[#9077D2] w-[60px] h-[60px] rounded">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <FiUpload size={40} color="white" />
                    {previewUrls[index] && (
                        <img
                            src={previewUrls[index]}
                            alt={`preview ${index}`}
                            className="w-10 h-10 object-cover rounded mt-1"
                        />
                    )}
                </label>
            ))}
        </div>
    );
};

export default ImageUpload;
