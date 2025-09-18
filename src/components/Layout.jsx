import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // adjust path if needed

export default function Layout() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* Title + Logo side by side */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <img 
                    src={logo} 
                    alt="Portfolio Logo" 
                    style={{ height: "2.5rem" }} // matches h1 height (approx)
                />
                <h1 style={{ margin: 0 }}>Dennis Kozevnikoff Portfolio Page</h1>
            </div>

            <nav style={{ marginTop: "15px" }}>
                <Link to="/">Home</Link> |{" "}
                <Link to="/aboutme">About Me</Link> |{" "}
                <Link to="/projects">Projects</Link> |{" "}
                <Link to="/education">Education</Link> |{" "}
                <Link to="/services">Services</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}
