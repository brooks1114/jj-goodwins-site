import React, { useEffect, useMemo } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const menuImages = [
    `${process.env.PUBLIC_URL}/assets/menu-1.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-2.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-3.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-4.jpg`,
];

export default function Menu() {
    const images = useMemo(() => menuImages, []);

    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            console.log("Preloading image:", src);
        });
    }, [images]);

    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-5xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | Menu - Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Explore the menu at JJ Goodwins, featuring delicious pub fare, craft beers, and specialty cocktails in Center Barnstead, NH."
                />
            </Helmet>

            {/* Menu Section */}
            <section className="py-12 px-4 text-center" aria-labelledby="menu-heading">
                <h2 id="menu-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                    Our Menu
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700 mb-8">
                    Discover the delicious offerings at JJ Goodwins! From hearty pub classics to refreshing specialty cocktails, our menu has something for everyone. View our full menu below, and visit us at 769 Suncook Valley Rd, Center Barnstead, NH, to enjoy a meal in our family-friendly restaurant and sports pub!
                </p>
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Menu Details
                        </h3>
                        {images.length === 0 ? (
                            <p className="text-center text-gray-500">No menu images available.</p>
                        ) : (
                            <div className="space-y-4">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Menu page ${idx + 1}`}
                                        loading="lazy"
                                        width="800"
                                        height="1100"
                                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                                        onError={() => console.error(`Failed to load image: ${img}`)}
                                    />
                                ))}
                            </div>
                        )}
                        <p className="text-sm sm:text-base text-gray-600 mt-4 text-center">
                            Please note that menu items and prices are subject to change. We strive to keep our information as accurate and up-to-date as possible. If you notice any discrepancies, kindly inform your server, and we will promptly address any necessary updates to ensure accuracy.
                        </p>
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
                            pages for the latest menu updates, daily specials, and events!
                        </p>
                    </div>
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
        </div>
    );
}