import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HeroSlider from "./components/hero-slider/heroSlider";
import Features from "./components/feature-icon/Feature"
function App() {
    return (
        <div className="App">
            <Header />
            <HeroSlider />
            <Features />
            <Footer />
        </div>
    );
}

export default App;
