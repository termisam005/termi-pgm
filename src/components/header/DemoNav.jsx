import { Link } from "react-router-dom";

export default function DemoNav() {
    return (
        <nav className="nav">
            <p className="nav_menu">
                <Link to="/DemoLogin">Login</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitButton">Button</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitForm">Form</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitProfile">Profile</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitPopup">Popup</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitEx1">Ex1</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitEx2">Ex2</Link>
            </p>
        </nav>
    );
}
