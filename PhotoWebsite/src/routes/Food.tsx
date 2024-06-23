import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import {getImageUrl} from "../u";

import Gallery from "../components/gallery/Gallery";

import {foodJ} from "../data/food";

import Footer from "../components/footer/Footer";

function Food() {
    return (
        <>
            <Navbar />

            <Hero 
                cName = "hero-mid"
                img = {getImageUrl("hero/food.JPG")}
                title = "Food"
                text = "May All Your Bacon Burn - Howl's Moving Castle"
            />

            <Gallery 
                json = {foodJ}
            />

            <Footer />
        </>
    );
}

export default Food;