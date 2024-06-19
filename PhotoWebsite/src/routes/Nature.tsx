import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import {getImageUrl} from "../u";

function Nature() {
    return (
        <>
        <Navbar />
        <Hero 
            cName = "hero-mid"
            img = {getImageUrl("hero/nature.JPG")}
            title = "Nature"
            text = "beautiful"
        />
        </>
    );
}

export default Nature;