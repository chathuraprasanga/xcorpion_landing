import {
    codeSlashOutline,
    browsersOutline,
    archiveOutline,
    phonePortraitOutline,
    bagCheckOutline,
    swapHorizontalOutline
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Services = () => {
    return (
        <div id="services" className="m-auto md:px-10 bg-[#111111]">
            <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 px-4 md:px-20">
                {/* Section Title */}
                <div className="w-fit mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white pb-2">What We Do</h2>
                    <div className="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
                        <hr className="border-[3px] border-green-400 dark:border-green-600 w-[50px] mx-auto" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
                    {/* Service Card */}
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition">
              <span>
                <IonIcon className="text-4xl sm:text-5xl text-green-400 dark:text-green-600" icon={service.icon} />
              </span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// Service Data (for easier management)
const servicesData = [
    {
        title: "Web Development",
        icon: codeSlashOutline,
        description: "Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge technologies.",
    },
    {
        title: "UI/UX Design",
        icon: browsersOutline,
        description: "Creating visually appealing and user-centric designs that enhance user experiences and engagement.",
    },
    {
        title: "Custom CMS Solutions",
        icon: archiveOutline,
        description: "Building reusable and efficient CMS APIs to simplify website management and scalability.",
    },
    {
        title: "Mobile App Development",
        icon: phonePortraitOutline,
        description: "Designing and developing user-friendly mobile applications for iOS and Android, ensuring seamless performance.",
    },
    {
        title: "E-commerce Development",
        icon: bagCheckOutline,
        description: "Creating robust platforms to elevate your online business presence and drive sales effectively.",
    },
    {
        title: "API Integration",
        icon: swapHorizontalOutline,
        description: "Seamlessly connecting systems to enhance functionality and performance for business automation.",
    },
];

export default Services;
