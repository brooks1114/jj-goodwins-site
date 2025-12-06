import React from "react";
import { Helmet } from "react-helmet-async";

export default function EmploymentApplication() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-5xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | Employment Application - Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Apply to join the JJ Goodwins team in Center Barnstead, NH. Download our employment application, fill it out, and bring it into the restaurant."
                />
            </Helmet>

            {/* Intro Section */}
            <section className="py-8 px-4 text-center" aria-labelledby="employment-heading">
                <h2
                    id="employment-heading"
                    className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800"
                >
                    Employment Application
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700 mb-6">
                    We’re always happy to meet friendly, reliable people who would like to join the
                    JJ Goodwins team. Please download and print the application below, fill it out as
                    completely as possible, and bring it into the restaurant during normal business
                    hours. If you have a resume, feel free to bring that along too. We appreciate
                    your interest and look forward to meeting you!
                </p>

                {/* Download Button */}
                <div className="mb-10 flex justify-center">
                    <a
                        href={`${process.env.PUBLIC_URL}/assets/application.pdf`}
                        download
                        className="inline-flex items-center px-8 py-3 rounded-lg bg-yellow-300 text-black font-semibold text-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all"
                    >
                        Download Application (PDF)
                    </a>
                </div>
            </section>

            {/* Application Images */}
            <section className="py-6 px-4" aria-labelledby="application-pages-heading">
                <h3
                    id="application-pages-heading"
                    className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800"
                >
                    Application Pages
                </h3>

                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg space-y-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                            Front Page
                        </h4>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/application-front.jpg`}
                            alt="JJ Goodwins Employment Application - Front Page"
                            loading="lazy"
                            width="800"
                            height="1100"
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                        />
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                            Back Page
                        </h4>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/application-back.jpg`}
                            alt="JJ Goodwins Employment Application - Back Page"
                            loading="lazy"
                            width="800"
                            height="1100"
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                        />
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
                        For the best results, we recommend printing the application on standard
                        letter-sized paper (8.5&quot; x 11&quot;). If you have any questions about
                        the application or current openings, please give us a call or stop by.
                    </p>
                </div>
            </section>
        </div>
    );
}
