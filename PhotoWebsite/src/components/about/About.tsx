import {getImageUrl} from "../../u";

import "./About.css";

const About = () => {
    return(
        <div className = "about">
            <h1>About Me</h1>
            <div className = "me">
                <div className = "me-text">
                    <h2>Mabel Hong</h2>
                    <p>Hello! I am a beginner in photography, but I love to learn more about it! 
                        I have been exploring small digital cameras as well as my first DSLR. 
                        I love taking photos of things I find beautiful, delicious, and loved! Though I have only really shot 
                        nature, flowers, and everything pretty in front of me, I hope to start learning the art of shooting
                        people that I love! Follow me on my journey :D</p>
                </div>
                <div className = "img">
                    <img src = {getImageUrl("hero/me1.JPG")}></img>
                    <img src = {getImageUrl("hero/me2.JPG")}></img>
                </div>
            </div>
        </div>
    );
}

export default About;