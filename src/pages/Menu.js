import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const menuImages = [
    `${process.env.PUBLIC_URL}/assets/menu-front.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-back.jpg`,
];

export default function Menu() {
    <Helmet>
        <title>JJ Goodwins | Restaurant & Sports Pub in Center Barnstead, NH</title>
        <meta name="description" content="Welcome to JJ Goodwins, your neighborhood pub in Center Barnstead, NH, offering delicious food, craft beer, and live music." />
    </Helmet>
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const images = useMemo(() => menuImages, []);

    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            console.log("Preloading image:", src);
        });
    }, [images]);

    const openModal = useCallback((index) => {
        setIsLoading(true);
        setCurrentIndex(index);
    }, [setCurrentIndex]);

    const closeModal = useCallback(() => {
        setCurrentIndex(null);
    }, [setCurrentIndex]);

    const showNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [setCurrentIndex, images]);

    const showPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [setCurrentIndex, images]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentIndex === null) return;
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, showNext, showPrev, closeModal]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: showNext,
        onSwipedRight: showPrev,
        trackMouse: true,
    });

    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">Our Menu</h2>

            {/* Facebook CTA Card */}
            <div className="mb-8 flex justify-center">
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
                        has all the latest updates including Live Music and other special events. Join us there for exclusive deals and tasty surprises!
                    </p>
                </div>
            </div>

            {/* Menu Images */}
            <div className="space-y-8">
                {images.length === 0 ? (
                    <p className="text-center text-gray-500">No menu images available.</p>
                ) : (
                    images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Menu page ${idx + 1}`}
                            loading="lazy"
                            width="500"
                            height="700"
                            className="w-full max-w-md mx-auto rounded shadow cursor-pointer transition-transform hover:scale-105"
                            onClick={() => openModal(idx)}
                            onError={() => console.error(`Failed to load image: ${img}`)}
                        />
                    ))
                )}
            </div>

            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in"
                    onClick={closeModal}
                    role="dialog"
                    aria-label="Menu image modal"
                >
                    <div
                        className="relative max-w-full max-h-[90vh]"
                        {...swipeHandlers}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            aria-label="Close menu modal"
                            className="absolute top-2 right-2 bg-white text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
                        >
                            ×
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            aria-label="Previous menu image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
                        >
                            ←
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next menu image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
                        >
                            →
                        </button>

                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded">
                                <span className="text-gray-600 animate-pulse">Loading...</span>
                            </div>
                        )}
                        <img
                            src={images[currentIndex]}
                            alt={`Zoomed Menu ${currentIndex + 1}`}
                            width="500"
                            height="700"
                            className={`max-h-[90vh] w-auto rounded shadow-lg transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                            onLoad={() => setIsLoading(false)}
                            onError={() => console.error(`Failed to load modal image: ${images[currentIndex]}`)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}