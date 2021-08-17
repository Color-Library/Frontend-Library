import React from 'react'
import './Dropdown.css'
import { useTheme } from '../../context/ThemeProvider';

type content = [
    {name?: string, path?: string},
    {name?: string, path?: string},
    {name?: string, path?: string},
]

export interface DropdownProps {
    label?: string,
    content?: content,
    backgroundColor?: string,
    textcolor?: string,
    borderColor?: string,
}

const Dropdown = ({
    label = 'Dropdown',
    content = [
        {name: 'Home', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
        {name: 'About', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
        {name: 'More Info', path: 'https://react.semantic-ui.com/collections/form/#types-form'},
      ],
    backgroundColor,
    textcolor,
    borderColor
}: DropdownProps) => {
    const theme = useTheme();
    const style = {
        backgroundColor: backgroundColor ? backgroundColor : theme.formBorder,
        color: textcolor ? textcolor : theme.btnTxtColor,
        border: borderColor ? '2px solid' + borderColor : '2px solid' + theme.btnBorderColor,
    }
    const itemStyle = {
        backgroundColor : backgroundColor ? backgroundColor : theme.formBorder,
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

export default Dropdown
