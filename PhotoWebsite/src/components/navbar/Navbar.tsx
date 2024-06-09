import { Component } from "react";

import "./Navbar.css";

import {getImageUrl} from "../../u";

import nav from "../../data/nav.json"

import {Link} from "react-router-dom"


class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return(
            <nav className = "NavbarItems">
                <h1 className = "logo">Mabel Hong</h1>

                <div className = "menuIcons" onClick = {this.handleClick}>
                    <img src = {this.state.clicked ? getImageUrl("nav/exit.png") : getImageUrl("nav/open.png")} height = "50" width = "50"></img>
                </div>

                <ul className = {this.state.clicked ? "navMenu active" : "navMenu"}>
                {
                    nav.map((item, id) => {
                        return <li key = {id}>
                            <Link className = "navItem" to = {item.url}><img src = {getImageUrl(item.icon)} height = "25" width = "25"></img>{item.title}</Link>
                        </li>
                    })
                }
                </ul>
            </nav>
        );
    }
}

export default Navbar;