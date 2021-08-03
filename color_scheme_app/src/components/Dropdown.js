import React from 'react'
import '../styles/Dropdown.css'
import { useTheme } from '../context/ThemeProvider';

export default function Dropdown({ label, backgroundColor, color }){
    const theme = useTheme();

    const style = {
        backgroundColor: backgroundColor ? backgroundColor : theme.btnBackgroundColor,
        color: color ? color : theme.btnTxtColor,
        border: '2px solid' + theme.btnBorderColor,
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" style={style}>{label}</button>
            <div className="dropdown-content" style={{backgroundColor: theme.btnBackgroundColor}}>
                <a href="https://react.semantic-ui.com/collections/form/#types-form">Link 1</a>
                <a href="https://react.semantic-ui.com/collections/form/#types-form">Link 2</a>
                <a href="https://react.semantic-ui.com/collections/form/#types-form">Link 3</a>
            </div>
        </div>
    )
}
