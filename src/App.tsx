import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home.tsx";

function App() {

    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default App
