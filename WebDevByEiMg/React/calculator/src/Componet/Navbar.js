import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';


const Navbar = props => {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-primary">
            <div class="container-fluid">
                <div className="nav-brand">S</div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        Home
                    </li>
                    <li class="nav-item">
                        About
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;