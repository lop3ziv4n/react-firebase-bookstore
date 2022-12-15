import React from "react";

import gitHubLogo from "../assets/github.svg";

const Footer = () => (
    <footer className="p-4 bg-secondary">
        <div className="text-center">
            <small className="text-white"> Creado por <strong>Iván López</strong> para el curso de
                react <strong>c.a.c.</strong>
                <a className="p-3" href="https://github.com/lop3ziv4n/react-firebase-bookstore.git">
                    <img src={gitHubLogo} alt="github-logo" style={{width: '2rem'}}/>
                </a>
            </small>
        </div>
    </footer>
);

export default Footer;
