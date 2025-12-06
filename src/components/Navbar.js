import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/daily-specials", label: "Daily Specials" },
    { to: "/happy-hour", label: "Happy Hour" },
    { to: "/about", label: "About JJ's" },
    { to: "/gallery", label: "Gallery" },
    { to: "/employment-application", label: "Job Application" }, // SHORTER LABEL
    { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="bg-gray-800 text-white px-4 py-4 flex items-center justify-between relative z-50 sticky top-0"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="flex items-center w-full max-w-screen-xl mx-auto">
                {/* Logo + Icons */}
                <div className="flex items-center space-x-4 whitespace-nowrap">
                    <NavLink to="/" aria-label="Go to homepage">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                            alt="JJ Goodwins Logo"
                            width="250"
                            height="150"
                            className="h-24 object-contain"
                        />
                    </NavLink>

                    <a href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-10 h-10 text-blue-500 hover:text-blue-700 transition" />
                    </a>

                    <a href="https://www.instagram.com/jjgoodwinsrestaurant" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 text-pink-500 hover:text-pink-700 transition" />
                    </a>

                    <a
                        href="https://www.doordash.com/store/jj-goodwins-restaurant-&-sports-pub-center-barnstead-35360245/77320366/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/Doordash.jpg`}
                            alt="DoorDash"
                            className="w-10 h-10 object-contain"
                        />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white bg-gray-800 p-2 rounded ml-auto"
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

                {/* Nav Links */}
                <div
                    className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row md:flex-nowrap whitespace-nowrap items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-lg font-bold absolute md:static top-24 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 md:flex-1 transition-all`}
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `transition ${
                                    isActive ? "text-yellow-400 font-extrabold" : "text-white hover:text-yellow-400"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
