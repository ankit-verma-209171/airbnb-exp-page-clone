import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <img src={"./images/hero-img.png"} alt="" className="hero--image" />
            <h1 className="hero--header">Online Experiences</h1>
            <div className="hero--text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </div>
        </section>
    );
}

export default Hero;
