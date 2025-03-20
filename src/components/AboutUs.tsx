const AboutUs = () => {
    return (
        <section id="about" className="py-20 md:px-20 lg:px-20 bg-primary-100">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-primary-500 text-lg mb-2" data-aos="fade-down">
                        About Us
                    </h2>
                    <h3 className="mb-4 text-3xl font-bold text-white section-title" data-aos="fade-down">
                        Innovating the Future with Technology
                    </h3>
                    <p className="mb-8 max-w-3xl text-gray-400" data-aos="fade-down">
                        At XCORPION, we leverage cutting-edge technology to build
                        **scalable, efficient, and innovative** solutions. Our expertise spans multiple industries, from
                        AI-driven applications to full-stack development, ensuring that businesses thrive in the
                        **digital era**.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border border-accent-300 bg-accent-100 p-6 text-center">
                            <h4 className="mb-2 text-3xl font-bold text-primary-500">10+</h4>
                            <p className="text-gray-400">Years of Experience</p>
                        </div>
                        <div className="rounded-lg border border-accent-300 bg-accent-100 p-6 text-center">
                            <h4 className="mb-2 text-3xl font-bold text-primary-500">50+</h4>
                            <p className="text-gray-400">Successful Projects</p>
                        </div>
                        <div className="rounded-lg border border-accent-300 bg-accent-100 p-6 text-center">
                            <h4 className="mb-2 text-3xl font-bold text-primary-500">30+</h4>
                            <p className="text-gray-400">Happy Clients</p>
                        </div>
                        <div className="rounded-lg border border-accent-300 bg-accent-100 p-6 text-center">
                            <h4 className="mb-2 text-3xl font-bold text-primary-500">24/7</h4>
                            <p className="text-gray-400">Customer Support</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
                    <a href="#team"
                       className="cursor-pointer rounded-full bg-secondary-400 hover:bg-secondary-500 text-white py-3 px-8">
                        Meet Our Team
                    </a>
                    <a href="#contact"
                       className="cursor-pointer rounded-full border-2 py-3 px-8 border-white text-white hover:bg-white hover:text-secondary-400 transition duration-300 ease-in-out">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
