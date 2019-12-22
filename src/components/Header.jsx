import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <header className="py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1 className="font-weight-bold mb-0">
                            <a href="/">Today</a>
                        </h1>
                    </div>
                    <div className="col-6 text-right">
                        <a href="/"><i className="fab fa-medium-m"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;