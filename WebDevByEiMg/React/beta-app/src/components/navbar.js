import React from 'react';


const nav = {
    navbox: {
        backgroundColor: "red",
        height: 100,
    },
    navItem: {
        color: "gold",
    }
}

const Navbar = props => {
    return (
        <div style={nav.navbox}>
            <li style={nav.navItem}>Home</li>
            <li style={nav.navItem}>Menu</li>
            <li style={nav.navItem}>Content</li>
        </div>
    )
    
};

export default Navbar;