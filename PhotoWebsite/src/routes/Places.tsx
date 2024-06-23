import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import {getImageUrl} from "../u";

import Gallery from "../components/gallery/Gallery";

import {placesJ} from "../data/places";

import Footer from "../components/footer/Footer";

function Places() {
    return (
        <>
            <Navbar />

            <Hero 
                cName = "hero-mid"
                img = {getImageUrl("hero/places.JPG")}
                title = "Places"
                text = "Far away in the universe from Earth to Mars, Will you please go with me? - Love Wins All IU"
            />

            <Gallery 
                json = {placesJ}
            />

            <Footer />
        </>
    );
}

export default Places;