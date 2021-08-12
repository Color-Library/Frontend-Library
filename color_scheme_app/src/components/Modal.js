import React from 'react';
import "../styles/Modal.css"
import { useTheme } from '../context/ThemeProvider';

export default function Modal({ content, bgcolor, border, label, color, name }){
    const theme = useTheme();
    const style = {
        background: bgcolor ? bgcolor : theme.formBorder,
        border: border ? '2px solid' + border : '2px solid' + theme.btnBorderColor,
        color: color ? color : theme.btnTxtColor,
    }

    const exitColor = {
        background: bgcolor ? bgcolor : theme.btnBackgroundColor,
        color: color ? color : theme.btnTxtColor,
    }

    return (
        <>
            <a href={"#openModal-" + name} className="modal" style={style}>{label ? label : theme.btnLabel}</a>
            <div id={"openModal-" + name} className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close" style={exitColor}>X</a>
                    <h2>Modal</h2>
                    <p>{content ? content : theme.borderContent}</p>
                </div>
            </div>
        </>
    );
}
