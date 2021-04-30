import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {

    const logo = <FontAwesomeIcon icon={faFutbol} />

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/wonder11">
                    Wonder 11 {logo}
                </a>
                <div className="header-block" id="navbarSupportedContent">
                    <form className="d-flex ms-auto">
                        <a href="#">Home</a><a href="#">Players</a><a href="#">Teams</a>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;