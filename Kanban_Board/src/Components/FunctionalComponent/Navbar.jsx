import React from "react";
import '../../assets/css/navbar.css';
import { Link } from "react-router-dom";
var Navbar=()=>
{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'className="link">Home</Link></li>
                    <li><Link to='/signup'className="link">Signup</Link></li>
                    <li><Link to='/login'className="link">Login</Link></li>
                </ul>
            </nav>
        </header>
        );
}
export default Navbar;