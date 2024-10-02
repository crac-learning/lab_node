import React from "react";

import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    label: string;
    onClick?: () => void
}

const NavLinkComponent: React.FC<NavLinkProps> = ({ to, label, onClick }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `${isActive ? 'text-purple-500 font-bold underline' : 'text-gray-600 hover:underline'}`
            }
            onClick={onClick}
            to={to}
        >
            {label}
        </NavLink>
    )
}

export default NavLinkComponent;