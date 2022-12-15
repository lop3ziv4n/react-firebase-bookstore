import React from 'react';


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <h1 className="display-6">
                    <i className="bi bi-book text-primary" style={{fontSize: '3rem'}}/>
                    &nbsp;&nbsp;Books
                </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Create</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;