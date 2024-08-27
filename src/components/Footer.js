import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p>
                        <Link
                            to="/about"
                            className="text-white"
                            style={{ textDecoration: 'none' }}
                        >
                            About Us
                        </Link>
                    </p>
                    <p>&copy; 2024 Sanikant Kushwaha. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
