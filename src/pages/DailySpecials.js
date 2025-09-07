import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function DailySpecials() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | Daily Specials - Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Discover the latest daily specials at JJ Goodwins, featuring delicious food and drink deals in Center Barnstead, NH."
                />
            </Helmet>

            {/* Hero Section */}
            <div className="bg-black">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/porch.jpg`}
                    alt="JJ Goodwins Exterior"
                    width="1200"
                    height="400"
                    className="w-full h-48 sm:h-64 md:h-96 object-cover mx-auto rounded-b-lg shadow-lg"
                />
            </div>

            {/* Daily Specials Section */}
            <section className="py-12 px-4 text-center" aria-labelledby="specials-heading">
                <h2 id="specials-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                    Daily Specials
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700 mb-8">
                    At JJ Goodwins, we keep things fresh with our daily specials! Enjoy exclusive deals on your favorite pub fare and creative drinks crafted by our talented bartenders. Visit us at 769 Suncook Valley Rd, Center Barnstead, NH, to savor the latest offerings and experience the vibrant atmosphere of our family-friendly restaurant and sports pub!
                </p>
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Daily Specials
                        </h3>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/weekly-specials.jpg`}
                            alt="JJ Goodwins Daily Specials"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                        <p className="text-sm sm:text-base text-gray-600 mt-4 text-center">
                            Please note that daily specials are subject to change. We strive to keep our information as accurate and up-to-date as possible. If you notice any discrepancies, kindly inform your server, and we will promptly address any necessary updates to ensure accuracy.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <Link
                        to="/menu"
                        className="inline-block px-6 py-3 bg-primary text-black font-bold rounded hover:bg-yellow-400 transition"
                        aria-label="View our full menu"
                    >
                        View Full Menu
                    </Link>
                </div>
            </section>

            {/* Social Media CTA */}
            <section className="py-12 px-6 text-center" aria-labelledby="social-heading">
                <h2 id="social-heading" className="text-3xl font-bold mb-4 text-gray-800">
                    Connect With Us
                </h2>
                <div className="flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md">
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 hover:scale-110 transition-all duration-300 shadow-md"
                                aria-label="Visit JJ Goodwins on Facebook"
                            >
                                <FaFacebook className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/jjgoodwinsrestaurant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 hover:scale-110 transition-all duration-300 shadow-md"
                                aria-label="Visit JJ Goodwins on Instagram"
                            >
                                <FaInstagram className="w-8 h-8" />
                            </a>
                        </div>
                        <p className="text-base sm:text-lg text-gray-800 text-center font-medium">
                            Stay in the loop with JJ Goodwins! Follow our{" "}
                            <a
                                href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                Facebook
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.instagram.com/jjgoodwinsrestaurant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-700 underline"
                            >
                                Instagram
                            </a>{" "}
                            pages for the latest daily specials and events!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}