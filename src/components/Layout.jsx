import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h1>my portt smoke weed</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
            </nav>
        </div>
    )
}