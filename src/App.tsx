import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {Carousel} from "@mantine/carousel";
import SampleCarousel from "./components/Carousel";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <>
            {/*Header*/}
            <div>
                <Header/>
            </div>
            <div>
                <HomePage/>
            </div>
            {/*Footer*/}
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default App
