import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav=()=>{
    return(
        <header>
            <nav className="nav-bar">
                <Link to="/profile">Profile</Link>
                <Link to="">Projects</Link>
                <Link to="">Contact</Link>
            </nav>
        </header>

    )
}

export default Nav