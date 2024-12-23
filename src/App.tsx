import React from "react";

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header Section */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Xcorpion</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#about" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:underline">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Xcorpion</h2>
                    <p className="text-lg md:text-xl mb-6">
                        The ultimate solution for your business needs.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">Features</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Feature One</h4>
                            <p>Efficient and scalable solutions tailored to your business.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Feature Two</h4>
                            <p>Secure and reliable tools to keep your data safe.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Feature Three</h4>
                            <p>Customizable features for a unique user experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
                    <p className="mb-4">Have questions? We’d love to hear from you!</p>
                    <a
                        href="mailto:contact@xcorpion.com"
                        className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200"
                    >
                        Email Us
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Xcorpion. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
