import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen">
            <Helmet>
                <title>About JJ Goodwins | Center Barnstead Restaurant & Pub</title>
                <meta name="description" content="Learn about JJ Goodwins Restaurant & Sports Pub, a family-owned favorite in Center Barnstead, NH, serving great food and drinks since 1995." />
            </Helmet>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">About JJ Goodwins</h2>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                    JJ Goodwins Restaurant & Sports Pub has been a local favorite since 1995.
                    Family-owned and operated, we pride ourselves on great food, cold drinks,
                    and an unbeatable atmosphere to catch the big game.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                    Whether you're here for our famous wings, loaded burgers, or just to hang out
                    with friends over a craft beer, you're always welcome at JJ Goodwins.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                    We support our community and regularly host game nights, live music,
                    and special events. Stop in today and experience what makes us a true hometown classic.
                </p>
            </div>
        </div>
    );
}