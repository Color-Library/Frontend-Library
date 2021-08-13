import React from 'react';
import './Input.css';
// import { useTheme } from '../../context/ThemeProvider';

export interface InputProps {
    inputBoxColor?: string,
    inputTxtColor?: string,
    inputTxtSize?: string,
    txtColor?: string,
    label?: string,
    labelFor?: string,
    type?: string,
    inputName?: string,
    requiredTxt?: string,
}

const Input = ({
    inputBoxColor,
    inputTxtColor,
    inputTxtSize,
    txtColor,
    label,
    labelFor,
    type,
    inputName,
    requiredTxt,
}: InputProps) => {
    // const theme = useTheme();

    const style = {
        color: inputTxtColor,
        fontSize: inputTxtSize,
        border: inputBoxColor,
    }
 
    return (
        <div>
            <label htmlFor={labelFor} style={{color: txtColor}}> 
                {label}
            </label>
            <div className="required">{requiredTxt}</div>
            <div>
                <input style={style} className="inputstyle" name={inputName} type={type} id={labelFor} />
            </div>
        </div>
    );
}

export default Input
