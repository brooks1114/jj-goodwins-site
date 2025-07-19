import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const specials = [
    {
        title: "Burger & Beer",
        description: "Get any burger with a pint of craft beer – just $15!",
    },
    {
        title: "Wing Night",
        description: "50¢ wings every Wednesday starting at 5 PM.",
    },
    {
        title: "Game Day Deals",
        description: "Half-price appetizers during all Patriots games!",
    },
];

export default function Home() {
    return (
        <div className="bg-white text-gray-800 font-serif">
            <Helmet>
                <title>JJ Goodwins | Restaurant & Sports Pub in Center Barnstead, NH</title>
                <meta name="description" content="Welcome to JJ Goodwins, your neighborhood pub in Center Barnstead, NH, offering delicious food, craft beer, and live music." />
            </Helmet>
            {/* Hero Section */}
            <div className="bg-black">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/porch.jpg`}
                    alt="JJ Goodwins Exterior"
                    width="1200" // Adjust based on actual image dimensions
                    height="400" // Adjust based on actual image dimensions
                    className="w-full h-48 sm:h-64 md:h-96 object-cover mx-auto rounded-b-lg shadow-lg"
                />
            </div>

            <div className="bg-secondary text-white py-12 px-4 text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to JJ Goodwin’s</h1>
                <p className="text-xl max-w-3xl mx-auto text-justify leading-relaxed font-medium">
                    Your neighborhood pub where great food, cold drinks, and good times come
                    together. We’re serving up classic favorites like pizza, nachos, and
                    hearty pub fare that hits the spot every time. Behind the bar, our
                    talented bartenders mix up creative drink specials each week—crafted just
                    for you. With a wide variety of beers on tap, there’s always something
                    new to try. Kick back with friends around our pool tables or enjoy the
                    laid-back vibe with music playing throughout the night. On select
                    evenings, join us for live music and let the energy of local talent
                    elevate your night. At JJ Goodwin’s, you're always among friends—cheers!
                </p>
                <Link
                    to="/menu"
                    className="inline-block mt-6 px-6 py-3 bg-primary text-black font-bold rounded hover:bg-yellow-400 transition"
                    aria-label="View our menu"
                >
                    View Menu
                </Link>
            </div>

            {/* Specials Section */}
            <section className="py-12 px-6 max-w-5xl mx-auto" aria-labelledby="specials-heading">
                <h2 id="specials-heading" className="text-3xl font-bold mb-6 text-center">
                    Seasonal Specials
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {specials.map((special, idx) => (
                        <div key={idx} className="bg-gray-100 p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">{special.title}</h3>
                            <p>{special.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location & Hours */}
            <section className="bg-gray-50 py-12 px-6 text-center" aria-labelledby="visit-heading">
                <h2 id="visit-heading" className="text-3xl font-bold mb-4">
                    Visit Us
                </h2>
                <p className="mb-2">769 Suncook Valley Rd, Center Barnstead, NH 03225</p>
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
                <div className="mt-8">
                    <h3 id="map-heading" className="text-2xl font-semibold mb-3 text-center">
                        Find Us on the Map
                    </h3>
                    <iframe
                        title="JJ Goodwins Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.7584125898537!2d-71.2841777235556!3d43.39174747111768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e22e7f2a9e0bb3%3A0x80b3431825d4eaca!2s769%20Suncook%20Valley%20Rd%2C%20Center%20Barnstead%2C%20NH%2003225!5e0!3m2!1sen!2sus!4v1721419853207!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full rounded shadow"
                    ></iframe>
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
                </div>
            </section>
        </div>
    );
}