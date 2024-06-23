import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import Footer from "../components/footer/Footer";

import Gallery from "../components/gallery/Gallery";

import {natureJ} from "../data/nature";

import {getImageUrl} from "../u";

function Nature() {
    return (
        <>
        <Navbar />
        <Hero 
            cName = "hero-mid"
            img = {getImageUrl("hero/nature.JPG")}
            title = "Nature"
            text = "Be my umbrella on rainy days, On days when the sun rises, I'll protect you - Home Lim Young Woong"
        />

        <Gallery 
            json = {natureJ}
        />

        <Footer/>
        </>
    );
}

export default Nature;