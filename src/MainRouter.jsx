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
            <Route path="/about" element={<h4>Dennis Kozevnikoff.
                 I am a second year AI software engineering student at Centennial College. <br/>In my
                 spare time I enjoy reading history books and hitting the gym hard.</h4>} />
            <Route path="/contact" element={<h1>contact wiz xx weed</h1>} />
            <Route path="/education" element={<h1>edd xx weed</h1>} />
            <Route path="/projects" element={<h1>projj xx weed</h1>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
        </>
    )
};

export default MainRouter;
