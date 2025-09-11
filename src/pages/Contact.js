import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | Contact - Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Contact JJ Goodwins in Center Barnstead, NH, for inquiries about our family-friendly restaurant and sports pub, featuring delicious food, craft beers, and live music."
                />
            </Helmet>

            {/* Contact Section */}
            <section className="py-12 px-4 text-center" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                    Contact Us
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700 mb-8">
                    Get in touch with JJ Goodwins! Whether you have questions about our menu, events, or reservations, we’re here to help. Reach out or visit us at 769 Suncook Valley Rd, Center Barnstead, NH, and experience our welcoming atmosphere!
                </p>
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Contact Information
                        </h3>
                        <p className="text-base sm:text-lg text-gray-800 mb-2">
                            📍 769 Suncook Valley Rd, Center Barnstead, NH 03225
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 mb-4">
                            📞 <a href="tel:+16032690044" className="text-blue-500 hover:text-blue-700 underline">
                                (603) 269-0044
                            </a>
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 mt-4 text-center">
                            Please note that contact information and hours are subject to change. We strive to keep our information as accurate and up-to-date as possible. If you notice any discrepancies, kindly inform our staff, and we will promptly address any necessary updates to ensure accuracy.
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.7584125898537!2d-71.2841777235556!3d43.39174747111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e22e7f2a9e0bb3%3A0x80b3431825d4eaca!2s769%20Suncook%20Valley%20Rd%2C%20Center%20Barnstead%2C%20NH%2003225!5e0!3m2!1sen!2us!4v1721419853207!5m2!1sen!2sus"
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