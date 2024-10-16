// CustomButton.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = (): void => {
    setSelected(!selected);
  };

  return (
    <div>
      <Button
        // type='submit'
        onClick={handleClick}
        variant="contained"
        style={{
          backgroundColor:
            selected || label === 'Save Changes' || label === 'Yes'
              ? '#9077D2'
              : 'transparent',
          color: selected || label === 'Save Changes' || label === 'Yes' ? 'white' : 'black',
          padding: '12px 48px',
          fontWeight: selected ? '500' : '400',
          borderRadius: '8px',
          border: selected || label === 'Save Changes' || label === 'Yes' ? 'none' : '1px solid black',
          textTransform: 'none', // To keep the text case as is
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;
