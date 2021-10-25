import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img height="50px" width="200px" src={logo} alt="" />
            </div>
            <div>
                <nav className="nav-bar">
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/reading">Reading</NavLink>
                    <NavLink to="/writing">Writing</NavLink>
                    <NavLink to="/speaking">Speaking</NavLink>
                    <NavLink to="/listening">Listening</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;