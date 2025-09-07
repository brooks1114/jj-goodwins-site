import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <div className="bg-white text-gray-800 font-serif">
            <Helmet>
                <title>JJ Goodwins | Restaurant & Sports Pub in Center Barnstead, NH</title>
                <meta
                    name="description"
                    content="Welcome to JJ Goodwins, your neighborhood pub in Center Barnstead, NH, offering delicious food, craft beer, and live music."
                />
            </Helmet>
            {/* Hero Section */}
            <div className="bg-black">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/porch.jpg`}
                    alt="JJ Goodwins Exterior"
                    width="1200"
                    height="400"
                    className="w-full h-48 sm:h-64 md:h-96 object-cover mx-auto rounded-b-lg shadow-lg"
                />
            </div>

            <div className="bg-secondary text-white py-12 px-4 text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to JJ Goodwin’s</h1>
                <p className="text-xl max-w-3xl mx-auto text-justify leading-relaxed font-medium">
                    Welcome to JJ Goodwins, the heart of Center Barnstead, NH, where great food, refreshing drinks, and unforgettable moments come together in a warm, family-friendly atmosphere. Nestled at 769 Suncook Valley Rd, our neighborhood restaurant and sports pub is the go-to spot for locals and visitors alike. Indulge in our mouthwatering pub fare—think crispy nachos, wood-fired pizzas, juicy burgers, and hearty comfort dishes crafted with care. Our talented bartenders keep the vibe lively with creative, handcrafted cocktails and a rotating selection of craft beers on tap, ensuring there’s always something new to sip. Whether you’re catching the game on our big screens, shooting pool with friends, or tapping your feet to live music from local talent on select evenings, JJ Goodwins is where community and good times thrive. Join us for our famous Happy Hour specials, daily deals, or simply to relax in our laid-back setting. Follow us on social media for the latest updates and swing by to experience the JJ Goodwins difference—where every visit feels like coming home!
                </p>
                <Link
                    to="/menu"
                    className="inline-block mt-6 px-6 py-3 bg-primary text-black font-bold rounded hover:bg-yellow-400 transition"
                    aria-label="View our menu"
                >
                    View Menu
                </Link>
            </div>

            {/* Location & Hours */}
            <section className="bg-gray-50 py-12 px-6 text-center" aria-labelledby="visit-heading">
                <h2 id="visit-heading" className="text-3xl font-bold mb-4">
                    Visit Us
                </h2>
                <p className="mb-2">769 Suncook Valley Rd, Center Barnstead, NH 03225</p>
                {/* Hours Image */}
                <div className="mb-8 flex justify-center">
                    <div className="bg-yellow-300 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                            Our Hours
                        </h3>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/hours.jpg`}
                            alt="JJ Goodwins Hours of Operation"
                            className="w-full h-auto object-contain rounded-lg"
                        />
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