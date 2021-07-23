import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Form.css"
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from './Button';

export default function Form({formTitle, inputBoxColor, inputTxtColor, backgroundColor, outerBorder, midBorder, innerBorder, textColor, buttonLabel, buttonColor, buttonTxtColor, buttonBorder, onSubmit, label1, label2, label3, label4, label1For, label2For, label3For, label4For, type1, type2, type3, type4, inputName1, inputName2, inputName3, inputName4}) {
    const txtColor = {
        color: textColor
    }
    const inputBoxes = {
        backgroundColor: inputBoxColor,
        color: inputTxtColor
    }
    return (
        <div style={{border: '35px solid'+outerBorder, backgroundColor: backgroundColor, borderLeft:'50px solid'+outerBorder, borderRight:'50px solid'+outerBorder}}>
            <div style={{border: '25px solid'+midBorder, borderLeft:'50px solid'+midBorder, borderRight:'50px solid'+midBorder}}>
                <div style={{border: '25px solid'+innerBorder,  borderLeft:'50px solid'+innerBorder, borderRight:'50px solid'+innerBorder}}>
           <form className='form_template'>
               <h1 style={txtColor}>{formTitle}</h1>
               <label for={label1For}> <h4 style={txtColor}>{label1}</h4></label>
               <OutlinedInput style={inputBoxes} name={inputName1} type={type1} id={label1For}></OutlinedInput>
               <label for={label2For}> <h4 style={txtColor}>{label2}</h4></label>
               <OutlinedInput style={inputBoxes} name={inputName2} type={type2} id={label2For}></OutlinedInput>
               <label for={label3For}> <h4 style={txtColor}>{label3}</h4></label>
               <OutlinedInput style={inputBoxes} name={inputName3} type={type3} id={label3For}></OutlinedInput><br/>
               <label for={label4For}> <h4 style={txtColor}>{label4}</h4></label>
               <OutlinedInput style={inputBoxes} name={inputName4} type={type4} id={label4For}></OutlinedInput><br/><br/><br/>
               <Button label={buttonLabel} onClick={onSubmit} backgroundColor={buttonColor} color={buttonTxtColor} borderColor={buttonBorder}></Button>
           </form>
           </div>
           </div>
        </div>
    );
}

Form.propTypes = {
    formTitle: PropTypes.string,
    inputBoxColor:PropTypes.string,
    inputTxtColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    outerBorder: PropTypes.string,
    midBorder: PropTypes.string,
    innerBorder: PropTypes.string,
    textColor: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonBorder: PropTypes.string,
    onSubmit: PropTypes.func,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    label1For: PropTypes.string,
    label2For: PropTypes.string,
    label3For: PropTypes.string,
    label4For: PropTypes.string,
    type1: PropTypes.string,
    type2: PropTypes.string,
    type3: PropTypes.string,
    type4: PropTypes.string,
    inputName1: PropTypes.string,
    inputName2: PropTypes.string,
    inputName3: PropTypes.string,
    inputName4: PropTypes.string

}

Form.defaultProps = {
    formTitle: null,
    inputBoxColor:null,
    inputTxtColor:null,
    backgroundColor: null,
    outerBorder: null,
    midBorder: null,
    innerBorder: null, 
    textColor: null,
    buttonLabel: null,
    buttonBorder: null,
    onSubmit: undefined,
    label1: null,
    label2: null,
    label3: null,
    label4: null,
    label1For: null,
    label2For: null,
    label3For: null,
    label4For: null,
    type1: null,
    type2: null,
    type3: null,
    type4: null,
    inputName1: null,
    inputName2: null,
    inputName3: null,
    inputName4: null

}
