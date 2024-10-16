import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // fontFamily : "Montserrat !important"
};

interface BasicModalProps {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode // to accept custom component
}


const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2" sx={{fontFamily: "Montserrat, sans-serif"}}>
                    {children}
                </Typography>
                <br />
                {/* <Button onClick={onClose}>Close</Button> */}
            </Box>
        </Modal>
    )
}

export default BasicModal;