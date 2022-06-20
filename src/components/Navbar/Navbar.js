import "./Navbar.css";
import logo from "./../../images/logo.png";

function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="" className="nav--logo" />
        </nav>
    );
}

export default Navbar;
