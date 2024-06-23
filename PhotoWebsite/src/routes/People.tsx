import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import Gallery from "../components/gallery/Gallery";

import {peopleJ} from "../data/people";

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
            text = "While the sunset fades, The pink light vividly painted you, Beautiful you - pink w2e"
        />

        <Gallery 
            json = {peopleJ}
        />

        <Footer />
        </>
    );
}

export default People;