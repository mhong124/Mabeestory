import "./Cameras.css";

import { getImageUrl } from "../../u";

const Cameras = () => {
    return (
        <div className = "cameras">
            <h1>My Cameras</h1>
            <p>Though my collection is small, it continues to grow! All these cameras have been in my household since I was young or 
                sold to me by a dear friend!
            </p>

            <div className = "allCard">
                <div className = "camCard">
                    <div className = "cardImg">
                        <img src = {getImageUrl("hero/casio.jpg")}></img>
                    </div>
                    <h4>Casio EX-Z60</h4>
                        <p>This camera portrays contrast and bright colors very well! I am not well versed on camera vocabulary, so I cannot express
                            its qualities perfectly, but it takes very vibrant pictures! All photos with a time stamp were taken from this camera.
                        </p>
                </div>

                <div className = "camCard">
                    <div className = "cardImg">
                        <img src = {getImageUrl("hero/olympus.jpeg")}></img>
                    </div>
                    <h4>Olympus FE-280</h4>
                        <p>This camera is my go to when carrying a small portable camera and taking higher quality photos of people and food! It
                            displays the yumminess of food so well and the beauty of people I love even better!
                        </p>
                </div>

                <div className = "camCard">
                    <div className = "cardImg">
                        <img src = {getImageUrl("hero/canon.jpg")}></img>
                    </div>
                    <h4>Canon EOS 1100D</h4>
                        <p>My first and only DSLR! Bought from my beautiful and generous friend Julie, I am excited to use this camera more!
                            I am most excited to use it to take photos of nature, and even more importantly to do photoshoots for my friends!
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Cameras;