import React from "react";

import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    label: string;
    onClick?: () => void
}

const NavLinkAdmin: React.FC<NavLinkProps> = ({ to, label, onClick }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `${isActive ? 'text-[#9077D2] font-normal' : 'text-black font-normal'}`
            }
            onClick={onClick}
            to={to}
        >
            {label}
        </NavLink>
    )
}

export default NavLinkAdmin;