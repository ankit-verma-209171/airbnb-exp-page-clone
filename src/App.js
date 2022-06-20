import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={`./images/${item.coverImg}`}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        );
    });

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <div className="card-container">{cards}</div>
        </div>
    );
}

export default App;
