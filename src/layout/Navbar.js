import React from 'react';

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Insta-ersatz
                        <h6 className="fst-italic color-dark">Why would you use the original?</h6>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex align-content-end">
                        <button className="btn btn-outline-secondary">Login</button>
                        <button className="btn btn-outline-light">Register</button>
                    </div>

                </div>
            </nav>
        </div>
    );
}