import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center p-8 bg-gray-100 min-h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
            <p className="mb-4 text-gray-600">Sorry, the page you’re looking for doesn’t exist.</p>
            <Link to="/" className="text-blue-500 hover:underline font-semibold">
                Return to Home
            </Link>
        </div>
    );
}