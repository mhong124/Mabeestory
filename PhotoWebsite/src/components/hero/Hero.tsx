import "./Hero.css";

function Hero(props){
    return (
        <>
            <div className = {props.cName}> 
                <img alt = "Hero img" src = {props.img} className = "heroImg"></img>
                <div className = "text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Hero;