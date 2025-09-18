import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Education from "./components/Education"
import AboutMe from "./components/AboutMe"

const MainRouter = () => {
    return (
        <>
        <Layout /   >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services/>} />
        </Routes>
        </>
    )
};

export default MainRouter;
