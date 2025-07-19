import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen">
            <Helmet>
                <title>JJ Goodwins | Restaurant & Sports Pub in Center Barnstead, NH</title>
                <meta name="description" content="Welcome to JJ Goodwins, your neighborhood pub in Center Barnstead, NH, offering delicious food, craft beer, and live music." />
            </Helmet>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

            <div className="text-center mb-8">
                <p className="text-base sm:text-lg mb-2 text-gray-700">📍 769 Suncook Valley Rd, Center Barnstead, NH 03225</p>
                <p className="text-base sm:text-lg mb-4 text-gray-700">📞 (603) 269-0044</p>

                {/* Hours Chart */}
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">Our Hours</h3>
                        <div className="grid grid-cols-2 gap-2 text-base sm:text-lg text-gray-800">
                            <div className="font-medium text-left">Monday</div>
                            <div className="text-right">CLOSED</div>
                            <div className="font-medium text-left">Tuesday</div>
                            <div className="text-right">CLOSED</div>
                            <div className="font-medium text-left">Wednesday</div>
                            <div className="text-right">4:00 PM – 10:00 PM</div>
                            <div className="font-medium text-left">Thursday</div>
                            <div className="text-right">4:00 PM – 10:00 PM</div>
                            <div className="font-medium text-left">Friday</div>
                            <div className="text-right">4:00 PM – 11:00 PM</div>
                            <div className="font-medium text-left">Saturday</div>
                            <div className="text-right">11:30 AM – 11:00 PM</div>
                            <div className="font-medium text-left">Sunday</div>
                            <div className="text-right">11:30 AM – 10:00 PM</div>
                        </div>
                    </div>
                </div>

                {/* Facebook CTA Card */}
                <div className="flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md">
                        <a
                            href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 hover:scale-110 transition-all duration-300 shadow-md"
                            aria-label="Visit JJ Goodwins on Facebook"
                        >
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <p className="mt-3 text-base sm:text-lg text-gray-800 text-center font-medium">
                            Hey JJ Goodwins fans! Craving our daily drink and food specials? They’re not here on the website, but our{" "}
                            <a
                                href="https://www.facebook.com/share/1G1XtjX3dF/?mibextid=wwXlfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                Facebook page
                            </a>{" "}
                            has all the latest updates. Join us there for exclusive deals and tasty surprises!
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">Find Us on the Map</h3>
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
            </div>
        </div>
    );
}