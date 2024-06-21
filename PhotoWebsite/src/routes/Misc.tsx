import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import {getImageUrl} from "../u";

import Footer from "../components/footer/Footer";

function Misc() {
    return (
        <>
            <Navbar/>

            <Hero 
                cName = "hero-mid"
                img = {getImageUrl("hero/misc.JPG")}
                title = "Misc."
                text = "beautiful"
            />

            <Footer />
        </>
    );
}

export default Misc;