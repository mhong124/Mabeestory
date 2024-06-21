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
            text = "While the sunset fades,
             The pink light vividly painted you,
             Beautiful you - pink w2e"
        />

        <Footer />
        </>
    );
}

export default People;