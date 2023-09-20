import "./navbar.css"
import React from 'react';
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Insta-ersatz
                        <h6 className="fst-italic color-dark">Why would you use the original?</h6>
                    </a>


                    <div className="navItems d-flex align-content-end">
                        <ul className="navbar-ul ">
                            {MenuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.url} className="navButton">{item.Title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}