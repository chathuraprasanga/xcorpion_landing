import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-lg transition-colors duration-300 md:px-10 lg:px-10">
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    <a href="/" className="flex items-center shrink-0">
                        <img
                            className="w-10"
                            height="100"
                            width="100"
                            src={logo}
                            alt="XCORPION logo"
                        />
                        <span className="md:flex text-2xl mt-0.5 font-bold text-primary-600 text-white">
              XCORPION
            </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center md:gap-8 text-white">
                        <a
                            href="/"
                            className="text-sm font-medium hover:text-purple-400 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium hover:text-purple-400 transition"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-sm font-medium hover:text-purple-400 transition"
                        >
                            Services
                        </a>
                        <a
                            href="#portfolio"
                            className="text-sm font-medium hover:text-purple-400 transition"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium hover:text-purple-400 transition"
                        >
                            Contact
                        </a>
                        <a
                            href="#contact"
                            className="cursor-pointer rounded-full border-2 py-2 px-6 border-white bg-white text-purple-900 hover:bg-purple-900 hover:text-white hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            Contact Now
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-2xl text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 z-[999]">
                    <a
                        href="/"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        Services
                    </a>
                    <a
                        href="#portfolio"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        Contact
                    </a>
                    <a
                        href="#contact"
                        className="block p-4 text-white hover:bg-purple-700 transition"
                    >
                        Contact Now
                    </a>
                </div>
            )}
        </>
    );
};

export default Header;
