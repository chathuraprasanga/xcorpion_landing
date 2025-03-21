import {useState} from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("https://wd-server.xcorpion.xyz/api/v1/public/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    subject: `New message from ${formData.name} in XCORPION Page`,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("Failed to send message.");
        }
    };
    return (
        <>
            <section className="bg-primary-100 text-white py-20" id="contact">
                <div className="container mx-auto max-w-7xl px-6 lg:px-16">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <p className="text-sm uppercase tracking-wide text-[#4A90E2]">
                            Contact
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold">
                            Get in <span className="text-[#F97316]">Touch</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                            Have a project in mind? Let's collaborate and bring your ideas to life.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div>
                            <p className="text-lg text-gray-300">
                                Feel free to reach out to us for any inquiries, collaborations, or support. We're here to help you succeed!
                            </p>

                            <ul className="mt-8 space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-[#0A0F1E]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Our Address</h3>
                                        <p className="text-gray-400">Mawathagama, Kurunegala. 60060</p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-[#0A0F1E]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="h-6 w-6">
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                                        <p className="text-gray-400">Phone: +94 (779) 250-108</p>
                                        <p className="text-gray-400">Email: info@xcorpion.xyz</p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-[#0A0F1E]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Working Hours</h3>
                                        <p className="text-gray-400">Mon - Sun: 00:00 - 11:59</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        {/* Contact Form */}
                        <div className="bg-[#101626] p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#172037] border border-[#4A90E2] py-2 px-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#172037] border border-[#4A90E2] py-2 px-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-4">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#172037] border border-[#4A90E2] py-2 px-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                                placeholder="Your Message"
                            ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#F97316] text-[#0A0F1E] font-semibold py-3 px-6 rounded-full hover:bg-[#FFA94D] transition"
                                    >
                                        Send Message
                                    </button>
                                </div>
                                {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
