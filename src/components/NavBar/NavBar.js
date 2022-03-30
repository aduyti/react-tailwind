import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'Support', path: '/support' },
        { id: 4, name: 'About Us', path: '/about' }
    ];
    return (
        <nav className="bg-indigo-200">
            <div className="w-6 h-6 md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </div>
            <ul className={`bg-indigo-200 w-full md:flex justify-center py-4 absolute md:static duration-500 ease-in ${isMenuOpen ? 'top-6' : 'top-[-150px]'}`}>
                {
                    navItems.map(item =>
                        <NavLink name={item.name}
                            path={item.path}
                            key={item.id}>
                        </NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;