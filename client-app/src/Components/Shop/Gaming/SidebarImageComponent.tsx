import React from "react";

import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    label?: string;
    image: string;
    onClick?: () => void
}

const SidebarImageComponent: React.FC<NavLinkProps> = ({ to, image, label, onClick }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `${isActive ? 'border-black' : 'border-none'}`
            }
            onClick={onClick}   
            to={to}
        >
            <div className={`h-[138px] w-full bg-contain bg-no-repeat bg-center flex bg-[#F5F5F5]`} 
            style={{backgroundImage: `url(${image})` }}
            >
             
            </div>

            {label && <div>{label}</div>}
        </NavLink>
    )
}

export default SidebarImageComponent;