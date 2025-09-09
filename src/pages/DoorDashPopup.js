import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function DoorDashPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const popupRef = useRef(null);
    const location = useLocation();

    // Debugging: Log pathname and pop-up status
    useEffect(() => {
        console.log("DoorDashPopup: Pathname =", location.pathname);
        if (
            location.pathname === "/" &&
            !sessionStorage.getItem("doorDashPopupShown")
        ) {
            console.log("DoorDashPopup: Pathname matches, setting isVisible = true");
            setIsVisible(true);
            sessionStorage.setItem("doorDashPopupShown", "true");
        } else {
            console.log(
                "DoorDashPopup: Not showing (wrong path or already shown)",
                location.pathname,
                sessionStorage.getItem("doorDashPopupShown")
            );
        }
    }, [location.pathname]);

    // Countdown timer
    useEffect(() => {
        if (isVisible && seconds > 0) {
            console.log("DoorDashPopup: Timer running, seconds =", seconds);
            const timer = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
            return () => {
                console.log("DoorDashPopup: Clearing timer");
                clearInterval(timer);
            };
        } else if (seconds === 0) {
            console.log("DoorDashPopup: Timer reached 0, closing pop-up");
            closePopup();
        }
    }, [isVisible, seconds]);

    // Close pop-up with animation
    const closePopup = () => {
        if (popupRef.current) {
            const doorDashIcon = document.getElementById("doordash-icon");
            if (doorDashIcon) {
                console.log("DoorDashPopup: Animating to DoorDash icon");
                const popupRect = popupRef.current.getBoundingClientRect();
                const iconRect = doorDashIcon.getBoundingClientRect();
                const translateX = iconRect.left - popupRect.left - popupRect.width / 2;
                const translateY = iconRect.top - popupRect.top - popupRect.height / 2;

                popupRef.current.style.transition = "all 0.5s ease-in-out";
                popupRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.1)`;
                popupRef.current.style.opacity = "0";

                setTimeout(() => {
                    setIsVisible(false);
                    console.log("DoorDashPopup: Pop-up closed");
                }, 500);
            } else {
                console.log("DoorDashPopup: DoorDash icon not found, closing without animation");
                setIsVisible(false);
            }
        }
    };

    if (!isVisible) {
        console.log("DoorDashPopup: Not rendering (isVisible = false)");
        return null;
    }

    console.log("DoorDashPopup: Rendering pop-up");
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div
                ref={popupRef}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative"
            >
                <button
                    onClick={() => {
                        console.log("DoorDashPopup: Close button clicked");
                        closePopup();
                    }}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    aria-label="Close pop-up"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                    Exciting News!
                </h2>
                <p className="text-gray-600 mb-4 font-serif">
                    We’re thrilled to announce our new partnership with DoorDash! Order your
                    favorite meals from JJ Goodwins for convenient delivery.
                </p>
                <a
                    href="https://www.doordash.com/store/jj-goodwins-restaurant-&-sports-pub-center-barnstead-35360245/77320366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-serif"
                >
                    Order Now on DoorDash
                </a>
                <p className="mt-4 text-sm text-gray-500 font-serif">
                    This pop-up will close in {seconds} second{seconds !== 1 ? "s" : ""}.
                </p>
            </div>
        </div>
    );
}