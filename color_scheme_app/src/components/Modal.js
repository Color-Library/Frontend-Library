import React from 'react';
import "../styles/Modal.css"
import { useTheme } from '../context/ThemeProvider';

export default function Icon({ content, color }){
    const theme = useTheme();
    // imageLink = image1Link ? image1Link : theme.image1Link
    const style = {
        background: color ? color : theme.btnBackgroundColor,
    }

    return(
        <>
        <a href="#openModal-about">Modal</a>
        <div id="openModal-about" className="modalDialog">
            <div>
                <a href="#close" title="Close" className="close" style={style}>X</a>
                <h2>Modal</h2>
                <p>{content}</p>
            </div>
        </div>
     </>
    );
}
