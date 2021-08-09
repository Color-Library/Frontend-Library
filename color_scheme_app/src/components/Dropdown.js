import React from 'react'
import '../styles/Dropdown.css'
import { useTheme } from '../context/ThemeProvider';

export default function Dropdown({ label, backgroundColor, textcolor, borderColor }){
    const theme = useTheme();
    label=label ? label : theme.label
    const style = {
        backgroundColor: backgroundColor ? backgroundColor : theme.btnBackgroundColor,
        color: textcolor ? textcolor : theme.btnTxtColor,
        border: borderColor ? '2px solid' + borderColor : '2px sold' + theme.btnBorderColor,
    }
    const itemStyle = {
        backgroundColor : backgroundColor ? backgroundColor : theme.btnBackgroundColor,
        color : textcolor ? textcolor : theme.btnTxtColor,
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" style={style}>
                {label}
                <img src="https://img.icons8.com/ios/20/000000/circled-chevron-down.png"/>
            </button>
            <div className="dropdown-content" >
                <a style={itemStyle} href="https://react.semantic-ui.com/collections/form/#types-form">Link 1</a>
                <a style={itemStyle} href="https://react.semantic-ui.com/collections/form/#types-form">Link 2</a>
                <a style={itemStyle} href="https://react.semantic-ui.com/collections/form/#types-form">Link 3</a>
            </div>
        </div>
    )
}
