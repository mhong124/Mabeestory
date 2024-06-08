import { Component } from "react";

import "./Navbar.css";

import {getImageUrl} from "../../u";

import nav from "../../data/nav.json"

class Navbar extends Component {
    render() {
        return(
            <nav className = "NavbarItems">
                <h1 className = "logo">Mabel Hong</h1>
                <ul className = "navMenu">
                    {
                        nav.map((item, id) => {
                            return
                                <li key = {id}>

                                </li>
                        })
                    }
                    <li>
                    <a href = "/"><img src = {getImageUrl("nav/home.png")} height = "35" width = "35"></img>Home</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;