import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About JJ's" },
    { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="bg-black text-white px-4 py-4 h-32 flex items-center justify-between relative z-50 sticky top-0"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="flex items-center w-full max-w-screen-xl">
                {/* Logo and Facebook Icon (Far Left) */}
                <div className="flex items-center space-x-4">
                    <Link to="/" aria-label="Go to homepage">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                            alt="JJ Goodwins Logo"
                            width="250"
                            height="150"
                            className="h-24 object-contain"
                        />
                    </Link>
                    <a
                        href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition"
                        aria-label="Visit JJ Goodwins on Facebook"
                    >
                        <FaFacebook className="w-10 h-10" />
                    </a>
                </div>

                {/* Hamburger Menu Button (Mobile) */}
                <button
                    className="md:hidden text-white focus:outline-none bg-gray-800 p-2 rounded"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Links (Desktop and Mobile Menu) */}
                <div
                    className={`${isOpen ? "flex" : "hidden"
                        } md:flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-lg font-bold absolute md:static top-32 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 md:flex-1`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="hover:text-primary transition"
                            aria-label={`Go to ${link.label} page`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}