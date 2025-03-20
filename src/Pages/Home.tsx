import AboutUs from "../components/AboutUs.tsx";
import Services from "../components/Services.tsx";
import ContactUs from "../components/ContactUs.tsx";
import Hero from "../components/Hero.tsx";
import Ourteam from "../components/Ourteam.tsx";
import OurWorks from "../components/OurWorks.tsx";
import Pricing from "../components/Pricing.tsx";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Ourteam/>
            <OurWorks/>
            <Pricing/>
            <ContactUs/>
        </>
    )
}

export default HomePage;