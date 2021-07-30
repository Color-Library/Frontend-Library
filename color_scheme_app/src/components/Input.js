import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Input.css"
import { useTheme } from '../context/ThemeProvider';

export default function Input({inputBoxColor, inputTxtColor, inputTxtSize, txtColor, label, labelFor, type, inputName, inputWidth, inputHeight}) {
    const theme = useTheme();

    const input = {
        backgroundColor: inputBoxColor ? inputBoxColor : theme.btnBackgroundColor,
        color: inputTxtColor ? inputTxtColor : theme.btnTxtColor,
        width: inputWidth,
        height: inputHeight,
        fontSize: inputTxtSize,
        borderRadius:'20px',
        textAlign: 'center'
    }
 
    return (
        <div>
            <label for={labelFor}> <h4 style={{color: txtColor}}>{label}</h4></label>
            <input style={input} name={inputName} type={type} id={labelFor}></input>
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
