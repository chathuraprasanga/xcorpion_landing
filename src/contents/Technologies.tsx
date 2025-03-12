import { Text } from "@mantine/core";

const Technologies = () => {
    return (
        <div className="px-8 py-4 flex flex-col md:flex-row items-center gap-8">
            {/* Left side: Title and expanded description */}
            <div className="md:w-1/2 mb-6 md:mb-0 pr-4">
                <span
                    className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                >
                    Our Technologies
                </span>
                <span
                    className="text-gray-700 text-base leading-loose"
                    style={{ textAlign: "justify" }}
                >
                     At <strong>XCORPION</strong>, we harness the power of cutting-edge technologies to build robust,
                    scalable, and innovative software solutions. Our team leverages a wide spectrum of modern
                    frameworks and tools to create intuitive user interfaces, efficient server-side architectures,
                    and seamless data-driven experiences. From dynamic front-end frameworks like React, Angular,
                    Vue.js, and Next.js that deliver captivating and responsive user interfaces, to back-end
                    technologies such as Node.js, Python, and Java that provide robust performance and scalability,
                    we cover every facet of software development.
                    <br /><br />
                    We also integrate advanced database systems like MongoDB and PostgreSQL, implement state-of-the-art
                    API strategies with GraphQL and REST, and utilize containerization and cloud platforms like Docker,
                    AWS, Firebase, and Azure to ensure our solutions are secure, agile, and future-proof. Our comprehensive
                    technology stack empowers us to transform complex business challenges into elegant, reliable software
                    that drives digital transformation.
                </span>
            </div>

            {/* Right side: Logos grid */}
            <div className="md:w-1/2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                        alt="Node.js"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                        alt="Tailwind CSS"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                        alt="Python"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                        alt="Docker"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                        alt="Angular"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                        alt="Vue.js"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        alt="JavaScript"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                        alt="TypeScript"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                        alt="MongoDB"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                        alt="AWS"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                        alt="GraphQL"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                        alt="Next.js"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                        alt="Sass"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                        alt="Java"
                        className="w-20 h-20 object-contain hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
