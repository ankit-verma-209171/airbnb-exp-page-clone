import "./Card.css";

function Card(props) {
    const badgeText = props.openSpots === 0 ? "SOLD OUT" : "";

    return (
        <div className="card">
            {props.openSpots === 0 && (
                <div className="card--badge">{badgeText}</div>
            )}
            <img src={props.img} alt="" className="card--image" />
            <div className="card--stats">
                <img src={"./images/star.png"} alt="" className="card--star" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) ●</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}

export default Card;
