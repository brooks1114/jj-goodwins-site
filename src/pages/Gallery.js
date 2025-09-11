import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const galleryImages = [
    `${process.env.PUBLIC_URL}/assets/porch.jpg`,
    `${process.env.PUBLIC_URL}/assets/hours.jpg`,
    `${process.env.PUBLIC_URL}/assets/weekly-specials.jpg`,
    `${process.env.PUBLIC_URL}/assets/happy-hour.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-front.jpg`,
    `${process.env.PUBLIC_URL}/assets/menu-back.jpg`,
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const images = useMemo(() => galleryImages, []);

    // Preload images
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
    }, []);

    const closeModal = useCallback(() => {
        setCurrentIndex(null);
    }, []);

    const showNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images]);

    const showPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images]);

    // Keyboard navigation
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

    // Map image paths to descriptive alt texts
    const altTexts = [
        "Restaurant exterior",
        "Hours of operation",
        "Daily specials menu",
        "Happy hour details",
        "Menu front page",
        "Menu back page",
    ];

    return (
        <div className="pt-4 sm:pt-6 pb-8 px-4 sm:px-8 max-w-4xl mx-auto bg-gray-100 min-h-screen font-serif">
            <Helmet>
                <title>JJ Goodwins | Gallery - Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Explore the JJ Goodwins experience through our gallery, showcasing our restaurant, sports pub, and vibrant atmosphere in Center Barnstead, NH."
                />
            </Helmet>

            {/* Gallery Section */}
            <section className="py-12 px-4 text-center" aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                    Gallery
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto text-justify leading-relaxed text-gray-700 mb-8">
                    Take a look at the vibrant atmosphere of JJ Goodwins! Our gallery captures the essence of our family-friendly restaurant and sports pub at 769 Suncook Valley Rd, Center Barnstead, NH. From our cozy interior to our delicious dishes, get a glimpse of what makes JJ Goodwins special!
                </p>
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Our Restaurant
                        </h3>
                        {images.length === 0 ? (
                            <p className="text-center text-gray-500">No gallery images available.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={altTexts[idx] || `Restaurant scene ${idx + 1}`}
                                        loading="lazy"
                                        width="300"
                                        height="200"
                                        className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                                        onClick={() => openModal(idx)}
                                        onError={() => console.error(`Failed to load image: ${img}`)}
                                    />
                                ))}
                            </div>
                        )}
                        <p className="text-sm sm:text-base text-gray-600 mt-4 text-center">
                            Please note that gallery images are subject to change. We strive to keep our content as accurate and up-to-date as possible. If you notice any discrepancies, kindly inform our staff, and we will promptly address any necessary updates to ensure accuracy.
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
                            alt="JJ Goodwins hours of operation"
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

            {/* Modal for Gallery Images */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in"
                    onClick={closeModal}
                    role="dialog"
                    aria-label="Gallery image modal"
                >
                    <div
                        className="relative max-w-full max-h-[90vh]"
                        {...swipeHandlers}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            aria-label="Close gallery modal"
                            className="absolute top-2 right-2 bg-white text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
                        >
                            ×
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            aria-label="Previous gallery image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
                        >
                            ←
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next gallery image"
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
                            alt={altTexts[currentIndex] ? `Enlarged ${altTexts[currentIndex]}` : `Enlarged restaurant scene ${currentIndex + 1}`}
                            width="500"
                            height="500"
                            className={`max-h-[90vh] w-auto rounded shadow-lg transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"
                                }`}
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