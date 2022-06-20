import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import cardImage1 from "./images/card-img-1.png";
import cardImage2 from "./images/card-img-2.png";
import cardImage3 from "./images/card-img-3.png";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="card-container">
                <Card
                    img={cardImage1}
                    rating={5.0}
                    reviewCount={6}
                    country={"USA"}
                    title={"Life Lessons with Katie Zaferes"}
                    price={136}
                />

                <Card
                    img={cardImage2}
                    rating={5.0}
                    reviewCount={30}
                    country={"USA"}
                    title={"Learn wedding photography"}
                    price={125}
                />

                <Card
                    img={cardImage3}
                    rating={4.8}
                    reviewCount={2}
                    country={"USA"}
                    title={"Group Mountain Biking"}
                    price={50}
                />
            </div>
        </div>
    );
}

export default App;
