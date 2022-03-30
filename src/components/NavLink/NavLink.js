import React from 'react';

const NavLink = ({ name, path }) => {
    return (
        <li className="mx-12 text-blue-800">
            <a href={path}>{name}</a>
        </li>
    );
};

export default NavLink;