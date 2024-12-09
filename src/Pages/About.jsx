import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about-us" className="py-16 bg-base-100 text-center">
                <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
                <p className="text-lg text-neutral max-w-3xl mx-auto">
                    Welcome to <span className="font-semibold">Gadget Heaven!</span> We believe in transforming everyday living with innovative and
                    cutting-edge technology. Our platform is your one-stop destination for discovering the latest gadgets that simplify tasks,
                    enhance productivity, and bring excitement to your daily life.
                </p>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-secondary">Our Mission</h3>
                    <p className="text-base text-neutral mt-2 max-w-2xl mx-auto">
                        To make the latest and most innovative gadgets accessible to everyone while delivering an exceptional shopping experience.
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-secondary">What We Offer</h3>
                    <ul className="list-none text-base text-neutral mt-4 space-y-2 max-w-2xl mx-auto">
                        <li>✔ A curated collection of <span className="font-semibold">high-tech gadgets</span> for all needs.</li>
                        <li>✔ <span className="font-semibold">Competitive pricing</span> to ensure great value for money.</li>
                        <li>✔ A <span className="font-semibold">seamless shopping experience</span>, from browsing to checkout.</li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-secondary">Why Choose Us?</h3>
                    <ul className="list-none text-base text-neutral mt-4 space-y-2 max-w-2xl mx-auto">
                        <li>✔ <span className="font-semibold">Quality Products</span>: We partner with trusted manufacturers to ensure every product meets high standards.</li>
                        <li>✔ <span className="font-semibold">Customer Satisfaction</span>: Your happiness is our top priority, with dedicated support to assist you.</li>
                        <li>✔ <span className="font-semibold">Fast & Reliable Delivery</span>: Enjoy quick and hassle-free delivery to your doorstep.</li>
                        <li>✔ <span className="font-semibold">Secure Payments</span>: Shop with confidence with our safe and secure payment methods.</li>
                    </ul>
                </div>

                <p className="text-lg text-neutral mt-12">
                    <span className="font-semibold">Join the Gadget Revolution!</span> Explore our collection and discover your next favorite gadget.
                </p>
            </section>
        </div>
    );
};

export default About;