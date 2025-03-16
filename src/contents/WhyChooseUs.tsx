import { SimpleGrid, ThemeIcon, Title, Text } from '@mantine/core';
import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from "@tabler/icons-react";

const FEATURES = [
    { icon: IconGauge, title: 'Extreme Performance', description: 'Lightning-fast speed and efficiency, optimized for performance.' },
    { icon: IconUser, title: 'Privacy Focused', description: 'We prioritize your data privacy with industry-leading security measures.' },
    { icon: IconCookie, title: 'No Third Parties', description: 'Your information remains solely in your control with no external tracking.' },
    { icon: IconLock, title: 'Secure by Default', description: 'Built-in security to safeguard your data from potential threats.' },
    { icon: IconMessage2, title: '24/7 Support', description: 'Round-the-clock assistance to ensure you have a seamless experience.' },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: string;
    description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
            <ThemeIcon variant="light" size={50} radius="xl" className="bg-blue-100 mb-4">
                <Icon size={24} stroke={1.5} className="text-blue-600"/>
            </ThemeIcon>
            <Text className="text-xl font-semibold text-gray-900">{title}</Text>
            <Text className="text-gray-600 text-base mt-2">{description}</Text>
        </div>
    );
}

function FeaturesGrid() {
    return (
        <div className="max-w-6xl mx-auto">
            <Title className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900">
                Why Choose Us?
            </Title>
            <Text className="text-center text-gray-700 text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Unlock unparalleled service, cutting-edge technology, and a seamless experience tailored just for you.
            </Text>



            <br/>
            <SimpleGrid
                cols={{sm: 1, lg: 3}}
                spacing="xl"
                className="px-4 sm:px-8"
            >
                {FEATURES.map((feature, index) => <FeatureCard key={index} {...feature} />)}
            </SimpleGrid>
        </div>
    );
}

const WhyChooseUs = () => {
    return (
        <section className="px-6 sm:px-12 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
            <FeaturesGrid/>
        </section>
    );
};

export default WhyChooseUs;
