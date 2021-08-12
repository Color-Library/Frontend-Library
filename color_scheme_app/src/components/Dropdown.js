import React from 'react'
import '../styles/Dropdown.css'
import { useTheme } from '../context/ThemeProvider';

export default function Dropdown({ label, content, backgroundColor, textcolor, borderColor }){
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
                <img src="https://img.icons8.com/ios/20/000000/circled-chevron-down.png" alt=""/>
            </button>
            <div className="dropdown-content" >
                {content.map((cnt, idx) => (
                    <a style={itemStyle} href={cnt.path} key={idx}>
                        {cnt.name}
                    </a>
                ))}
            </div>
        </div>
    )
}
