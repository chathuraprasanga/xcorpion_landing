import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Services from "./components/Services.tsx";
import ContactUs from "./components/ContactUs.tsx";

function App() {

  return (
    <>
        <div>
            <Header/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <AboutUs/>
        </div>
        <div>
            <Services/>
        </div>
        <div>
            <ContactUs/>
        </div>
        <div>
            <Footer/>
        </div>
    </>
  )
}

export default App
