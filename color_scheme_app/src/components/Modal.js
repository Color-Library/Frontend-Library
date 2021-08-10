import React from 'react';
import "../styles/Modal.css"
import { useTheme } from '../context/ThemeProvider';

export default function Icon({ content, bgcolor, border, label, color }){
    const theme = useTheme();
    // imageLink = image1Link ? image1Link : theme.image1Link
    const style = {
        background: bgcolor ? bgcolor : theme.btnBackgroundColor,
        border: border ? '2px solid' + border : '2px solid' + theme.btnBorderColor,
        color: color ? color : theme.btnLabel,
    }

    const exitColor = {
        background: bgcolor ? bgcolor : theme.btnBackgroundColor,
        color: color ? color : theme.btnLabel,
    }

    return(
        <>
        <a href="#openModal-about" className="modal" style={style}>{label ? label : theme.btnLabel}</a>
        <div id="openModal-about" className="modalDialog">
            <div>
                <a href="#close" title="Close" className="close" style={exitColor}>X</a>
                <h2>Modal</h2>
                <p>{content ? content : theme.borderContent}</p>
            </div>
        </div>
     </>
    );
}
