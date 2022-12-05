import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';


const Navbar = props => {
    return (
        <nav className="stick-top nav bg-primary">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
        </nav>
    )
}


export default Navbar;