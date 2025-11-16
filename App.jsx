import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Accueil";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import A_propos from "./propos";
import Contact from "./Contact";
import Reservation from "./Reservation";

export default function App(){
    return(
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/about" element={<A_propos/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/booking" element={<Reservation/>}/>
            </Routes>

            <Footer/>

        </BrowserRouter>
    )
}