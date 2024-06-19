import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import About from "../components/about/About";

import {getImageUrl} from "../u";

function Home() {
    return (
        <>
            <Navbar />
            <Hero 
                cName = "hero"
                img = {getImageUrl("hero/hero.JPG")}
                title = "Mabel Hong"
                text = "Photo Portfolio"
            />
            <About/>
        </>
    );
}

export default Home;