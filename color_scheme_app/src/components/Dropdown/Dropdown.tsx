import React from 'react'
import './Dropdown.css'
// import { useTheme } from '../../context/ThemeProvider';

type content = [
    {name?: string, path?: string},
    {name?: string, path?: string},
    {name?: string, path?: string},
]

export interface DropdownProps {
    label?: string,
    content: content,
    backgroundColor: string,
    textcolor?: string,
    borderColor: string,
}

const Dropdown = ({
    label,
    content,
    backgroundColor,
    textcolor,
    borderColor
}: DropdownProps) => {
    // const theme = useTheme();
    const style = {
        backgroundColor: backgroundColor,
        color: textcolor,
        border: borderColor,
    }
    const itemStyle = {
        backgroundColor: backgroundColor,
        color: textcolor,
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

export default Dropdown
