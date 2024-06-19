import { getImageUrl } from "../../u";
import "./Footer.css";

const Footer = () => {
    return(
        <div className = "footer">
            <div>
                <a href = "https://mabelhong.com" target = "_blank">Mabel Hong</a>
                <p>Thank you for viewing!</p>
            </div>
            <div> 
                <a href = "https://www.instagram.com/mabeestory/" target = "_blank"><img src = {getImageUrl("footer/insta.png")} height = "50" width = "50"></img></a>
                <a href = "/" target = "_blank"><img src = {getImageUrl("footer/lightroom.png")} height = "50" width = "50"></img></a>
                <a href = "https://www.linkedin.com/in/mabel-hong" target = "_blank"><img src = {getImageUrl("footer/linked.png")} height = "50" width = "50"></img></a>
            </div>
        </div>
    );
}

export default Footer;