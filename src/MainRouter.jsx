import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Services from "./components/Services"

const MainRouter = () => {
    return (
        <>
        <Layout /   >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>about xx weed</h1>} />
            <Route path="/contact" element={<h1>contact wiz xx weed</h1>} />
            <Route path="/education" element={<h1>edd xx weed</h1>} />
            <Route path="/projects" element={<h1>projj xx weed</h1>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
        </>
    )
};

export default MainRouter;
