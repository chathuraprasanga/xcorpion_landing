import AboutUs from "../components/AboutUs.tsx";
import Services from "../components/Services.tsx";
import ContactUs from "../components/ContactUs.tsx";
import Hero from "../components/Hero.tsx";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <Services/>
            <ContactUs/>
        </>
    )
}

export default HomePage;