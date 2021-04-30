import React from 'react';

const Footer = () => {
    return (
        <footer className="container text-center py-4 text-secondary">
            Naimul Alam {(new Date().getFullYear())} || &copy; All right reserved
        </footer>
    );
};

export default Footer;