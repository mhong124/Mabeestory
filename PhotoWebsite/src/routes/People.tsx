import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import Footer from "../components/footer/Footer";

import {getImageUrl} from "../u";

function People() {
    return (
        <>
        <Navbar />

        <Hero 
            cName = "hero-mid"
            img = {getImageUrl("hero/people.JPG")}
            title = "People"
            text = "beautiful"
        />

        <Footer />
        </>
    );
}

export default People;