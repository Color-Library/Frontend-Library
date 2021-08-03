import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.css';
import { useTheme } from '../context/ThemeProvider';

export default function Input({inputBoxColor, inputTxtColor, inputTxtSize, txtColor, label, labelFor, type, inputName, inputWidth, inputHeight, requiredTxt }) {
    const theme = useTheme();

    const input = {
        backgroundColor: 'white',
        color: inputTxtColor ? inputTxtColor : theme.btnTxtColor,
        width: '20%',
        height: '40px',
        fontSize: inputTxtSize,
        border: inputBoxColor ? '2px solid' + inputBoxColor : '2px solid' + theme.btnBorderColor,
        borderRadius:'12px',
        textAlign: 'center',
        outline: 'none',
    }

    const required = {
        color: 'red',
        opacity: '60%',
        fontSize: '12px',
    }
 
    return (
        <div>
            <label for={labelFor} style={{color: txtColor}}> 
                {label}
            </label>
            <div style={required}>{requiredTxt}</div>
            <div>
                <input style={input} name={inputName} type={type} id={labelFor} />
            </div>
        </div>
    );
}

Input.propTypes = {
    inputBoxColor:PropTypes.string,
    inputTxtColor: PropTypes.string,
    inputTxtSize: PropTypes.string,
    txtColor: PropTypes.string,
    label: PropTypes.string,
    labelFor: PropTypes.string,
    type: PropTypes.string,
    inputName: PropTypes.string,
    inputWidth: PropTypes.string,
    inputHeight: PropTypes.string,
}

Input.defaultProps = {
    inputBoxColor:null,
    inputTxtColor:null,
    inputTxtSize: null,
    txtColor: null,
    label: null,
    labelFor: null,
    type: null,
    inputName: null,
    inputWidth: null,
    inputHeight: null,
}
