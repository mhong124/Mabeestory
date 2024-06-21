import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import {getImageUrl} from "../u";

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

            <Footer />
        </>
    );
}

export default Food;