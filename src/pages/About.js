import React from "react";
import { Link } from "react-router-dom"; // Added for CTA Link
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function About() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | About Us - Restaurant & Sports Pub in Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Learn about JJ Goodwins, a family-friendly restaurant and sports pub in Center Barnstead, NH, revitalized in 2025 with a new bar, outdoor patio, live music, and more."
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

            {/* About Section */}
            <section className="py-12 px-4 text-center" aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                    About JJ Goodwins
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700">
                    JJ Goodwins, a beloved cornerstone of Center Barnstead, NH, was proudly revitalized in the summer of 2025 under new ownership, bringing back its iconic name and vibrant spirit. Housed in a charming two-story building at 769 Suncook Valley Rd, our family-friendly restaurant and sports pub offers something for everyone. Upstairs, enjoy our newly renovated bar and spacious indoor seating, perfect for large parties, or step out to the outdoor patio for a relaxing dining experience. Test your skills at our dartboards or gather with friends in a welcoming atmosphere. Downstairs, our traditional pub-style bar sets the stage for lively evenings with live music, a jukebox loaded with your favorite hits, pool tables, and complimentary popcorn to keep the good times rolling.
                    <br />
                    <br />
                    At JJ Goodwins, we’re committed to keeping things fresh and exciting. Our bartenders craft unique specialty drinks weekly, and our Monday-through-Friday happy hour is the perfect way to unwind. Explore our weekly specials for delicious deals, and catch every big game with our sports packages, including NFL football and more. Whether you’re here for a family meal, a night out with friends, or to cheer on your team, JJ Goodwins is your go-to spot for great food, cold drinks, and unforgettable moments. Come visit us and experience the warmth and energy of our reimagined pub!
                </p>
                <div className="text-center mt-6">
                    <Link
                        to="/menu"
                        className="inline-block px-6 py-3 bg-primary text-black font-bold rounded hover:bg-yellow-400 transition"
                        aria-label="View our menu"
                    >
                        Explore Our Menu
                    </Link>
                </div>
            </section>

            {/* Hours Section */}
            <section className="py-12 px-6 text-center" aria-labelledby="hours-heading">
                <h2 id="hours-heading" className="text-3xl font-bold mb-4 text-gray-800">
                    Our Hours
                </h2>
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Hours of Operation
                        </h3>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/hours.jpg`}
                            alt="JJ Goodwins Hours of Operation"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
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
                            pages for the latest updates on specials, events, and more!
                        </p>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 px-6 text-center" aria-labelledby="map-heading">
                <h2 id="map-heading" className="text-3xl font-bold mb-4 text-gray-800">
                    Find Us
                </h2>
                <div className="relative w-full h-0 pb-[56.25%] sm:pb-[40%] rounded shadow overflow-hidden">
                    <iframe
                        title="JJ Goodwins Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.7584125898537!2d-71.2841777235556!3d43.39174747111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e22e7f2a9e0bb3%3A0x80b3431825d4eaca!2s769%20Suncook%20Valley%20Rd%2C%20Center%20Barnstead%2C%20NH%2003225!5e0!3m2!1sen!2sus!4v1721419853207!5m2!1sen!2sus"
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                    Map not loading? Visit us at{" "}
                    <a
                        href="https://www.google.com/maps/place/769+Suncook+Valley+Rd,+Center+Barnstead,+NH+03225"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        769 Suncook Valley Rd
                    </a>.
                </p>
            </section>
        </div>
    );
}