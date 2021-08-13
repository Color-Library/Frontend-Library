import React from 'react';
import "./Modal.css"
// import { useTheme } from '../../context/ThemeProvider';

export interface ModalProps {
    content?: string,
    bgcolor?: string,
    label?: string,
    color?: string,
    border?: string,
    name?: string,
}

const Modal = ({
    content,
    bgcolor,
    border,
    label,
    color,
    name
}: ModalProps) => {
    // const theme = useTheme();
    const style = {
        background: bgcolor,
        border: '2px solid' + border,
        color: color,
    }

    const exitColor = {
        background: bgcolor,
        color: color,
    }

    return (
        <>
            <a href={"#openModal-" + name} className="modal" style={style}>{label}</a>
            <div id={"openModal-" + name} className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close" style={exitColor}>X</a>
                    <h2>Modal</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}

export default Modal
