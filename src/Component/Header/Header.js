import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="d-block">
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/notices">Notices</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;