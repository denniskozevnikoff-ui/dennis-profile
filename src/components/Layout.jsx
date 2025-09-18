import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h1>Personal Portfolio Page. Created in React</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About Me</Link> |{" "}
                <Link to="/contact">Projects</Link> |{" "}
                <Link to="/">Education</Link> |{" "}
                <Link to="/services">Services</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
            </nav>
        </div>
    )
}