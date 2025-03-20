const Pricing = () => {
    return (
        <>
            <div id="pricing" className=" md:px-20 lg:px-20 bg-primary-100">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <div className="mb-12 text-center">
                        <h3 className="text-secondary-400 uppercase tracking-wide" data-aos="fade-down">Pricing
                            Plans</h3>
                        <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
                            Choose Your <span className="text-primary-400">Perfect Plan</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-300" data-aos="fade-down">
                            Select the best package that aligns with your business needs.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* Basic Plan */}
                        <div
                            className="relative bg-accent-200 border border-secondary-300 p-6 rounded-xl transition hover:scale-105">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white">Basic</h3>
                                <div className="mt-4 text-center">
                                    <span className="text-4xl text-primary-400 font-bold">$ 499</span>
                                    <span className="text-gray-400"> /month</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <ul className="mb-8 space-y-4">
                                    {["Cloud Hosting", "Basic Security", "Email Support", "5GB Storage"].map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-secondary-400" viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-primary-300 to-primary-400 hover:from-primary-400 hover:to-primary-500 transition">
                                    Choose Plan
                                </button>
                            </div>
                        </div>

                        {/* Premium Plan (Most Popular) */}
                        <div
                            className="relative bg-accent-300 border-2 border-primary-400 rounded-xl p-6 shadow-lg transition hover:scale-105">
                            <div
                                className="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-primary-400 px-3 py-1 text-white text-sm font-semibold">
                                Most Popular
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white">Premium</h3>
                                <div className="mt-4 text-center">
                                    <span className="text-4xl text-primary-400 font-bold">$ 899</span>
                                    <span className="text-gray-400"> /month</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <ul className="mb-8 space-y-4">
                                    {["Dedicated Hosting", "Advanced Security", "Priority Support", "50GB Storage"].map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-secondary-400" viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-primary-300 to-primary-400 hover:from-primary-400 hover:to-primary-500 transition">
                                    Choose Plan
                                </button>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div
                            className="relative bg-accent-200 border border-secondary-300 p-6 rounded-xl transition hover:scale-105">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                                <div className="mt-4 text-center">
                                    <span className="text-4xl text-primary-400 font-bold">$ 1499</span>
                                    <span className="text-gray-400"> /month</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <ul className="mb-8 space-y-4">
                                    {["Unlimited Hosting", "Enterprise Security", "24/7 Dedicated Support", "Unlimited Storage"].map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <svg className="mr-2 h-5 w-5 text-secondary-400" viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-primary-300 to-primary-400 hover:from-primary-400 hover:to-primary-500 transition">
                                    Choose Plan
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;