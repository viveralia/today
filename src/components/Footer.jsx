import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="container-fluid py-4">
            <div className="row">
                <div className="col-12 text-center">
                    <small className="font-weight-bold">Hecho con <span className="emoji" role="img" aria-label="amor">❤️</span> y con <i className="fab fa-react"></i></small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;