import { HeroImageBackground } from "../components/heroBanner/HeroImageBackground.tsx";
import { FeaturesCards } from "../components/FeaturesGrid/FeaturesCard.tsx";
import { EmailBanner } from "../components/emailBanner/EmailBanner.tsx";

const HomePage = () => {
    return (
        <div className="w-full">
            <HeroImageBackground />
            <FeaturesCards/>
            <EmailBanner/>
        </div>
    );
};

export default HomePage;
