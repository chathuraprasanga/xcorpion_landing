import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
// Import additional pages as needed
import BlogPage from "./pages/BlogPage.js";
import ProductsPage from "./pages/ProductsPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/products" element={<ProductsPage />} />
                {/* Add more routes here */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
