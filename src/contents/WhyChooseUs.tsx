import {Card} from "@mantine/core";

const WhyChooseUs = () => {


    return (
        <section className="px-8 py-16 bg-gray-50">
            {/* Section Title and Introduction */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-lg text-gray-600">
                    Discover the benefits of our service – expert team, quality service, and innovative solutions
                    tailored to your needs.
                </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <Card withBorder>
                    <div>
                        Test
                    </div>
                </Card>
                <Card withBorder>Test</Card>
                <Card withBorder>Test</Card>
            </div>
        </section>
    );
};

export default WhyChooseUs;
