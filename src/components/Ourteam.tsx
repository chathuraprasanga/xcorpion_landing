import cp from "../assets/team/cp.jpeg"
import vk from "../assets/team/vk.jpeg"
import is from "../assets/team/is.jpeg"
import ms from "../assets/team/ms.jpeg"

const OurTeam = () => {
    return (
        <section id="team" className="bg-primary-100 py-10">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-sm text-primary-500 uppercase tracking-wide">The Team</p>
                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Meet Our <span className="text-secondary-400">Team</span>
                    </h3>
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center bg-accent-100 p-6 rounded-lg shadow-lg hover:bg-accent-200 transition">
                            {/* Profile Image */}
                            <img
                                className="mb-4 rounded-full mx-auto h-32 w-32 border-4 border-secondary-400"
                                src={member.image}
                                alt={member.name}
                            />
                            {/* Name & Role */}
                            <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                            <p className="text-primary-400 uppercase text-sm">{member.role}</p>

                            {/* Social Media Icons */}
                            <div className="flex justify-center mt-4 space-x-4">
                                {member.socials.map((social, i) => (
                                    <a key={i} href={social.link} className="text-secondary-400 hover:text-primary-500 transition">
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Team Data (for easier management)
const teamMembers = [
    {
        name: "Chathura Prasanga",
        role: "Fullstack Engineer",
        image: cp,
        socials: [
            {
                link: "https://www.linkedin.com/in/chathura-prasanga-162954179/",
                icon: () => (
                    <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48c-1.15 0-2.07-.94-2.07-2.09s.93-2.09 2.07-2.09 2.07.94 2.07 2.09c0 1.15-.93 2.09-2.07 2.09zm15.11 12.97h-3.56v-5.56c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.53v6.21z"></path>
                    </svg>
                )
            },
        ],

    },
    {
        name: "Isuru Sandakelum",
        role: "Fullstack Engineer",
        image: is,
        socials: [
            {
                link: "https://www.linkedin.com/in/isuru-sandakalum-0697b3267/",
                icon: () => (
                    <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48c-1.15 0-2.07-.94-2.07-2.09s.93-2.09 2.07-2.09 2.07.94 2.07 2.09c0 1.15-.93 2.09-2.07 2.09zm15.11 12.97h-3.56v-5.56c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.53v6.21z"></path>
                    </svg>
                )
            },
        ],

    },
    {
        name: "Vishwa Kavinda",
        role: "QA Engineer",
        image: vk,
        socials: [
            {
                link: "https://www.linkedin.com/in/vishwa-rathnayake-702892278/",
                icon: () => (
                    <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48c-1.15 0-2.07-.94-2.07-2.09s.93-2.09 2.07-2.09 2.07.94 2.07 2.09c0 1.15-.93 2.09-2.07 2.09zm15.11 12.97h-3.56v-5.56c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.53v6.21z"></path>
                    </svg>
                )
            },
        ],
    },
    {
        name: "Madura Sankha",
        role: "Dev Ops Engineer",
        image: ms,
        socials: [
            {
                link: "https://www.linkedin.com/in/madura-sanka-manamendra-08ab49210/",
                icon: () => (
                    <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48c-1.15 0-2.07-.94-2.07-2.09s.93-2.09 2.07-2.09 2.07.94 2.07 2.09c0 1.15-.93 2.09-2.07 2.09zm15.11 12.97h-3.56v-5.56c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.53v6.21z"></path>
                    </svg>
                )
            },
        ],
    },
];

export default OurTeam;
