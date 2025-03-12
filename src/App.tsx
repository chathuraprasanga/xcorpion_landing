import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {Carousel} from "@mantine/carousel";
import SampleCarousel from "./components/Carousel";

function App() {

    return (
        <>
            {/*Header*/}
            <div>
                <Header/>
            </div>
            <div>
                <SampleCarousel/>
            </div>
            {/*Footer*/}
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default App
