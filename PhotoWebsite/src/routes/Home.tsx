import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

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
        </>
    );
}

export default Home;