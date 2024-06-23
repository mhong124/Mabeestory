/* import "./Gallery.css"; */

import {useState} from 'react';

import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/plugins/captions.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import Images from "./Images";

function Gallery(props) {
    // const [open, setOpen] = useState<boolean>(false);

    const [index, setIndex] = useState<number>(-1);
    return (
        <>

        <h1>Click on my photos!</h1>

        <Images data = {props.json} onClick = {(currentIndex) => {setIndex(currentIndex)}}/>

        <Lightbox
            //open = {open}
            slides = {props.json}
            //close = {() => setOpen(false)}
            plugins = {[Captions, Download, Fullscreen, Zoom, Thumbnails]}
            captions = {{
                showToggle:true,
                descriptionTextAlign: 'end',
            }}
            index = {index}
            open = {index >=0}
            close = {() => setIndex(-1)}
        />
        </>
    );
}

export default Gallery;