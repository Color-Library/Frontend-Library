import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button.js';

export default function Form({formTitle, buttonLabel, buttonColor, buttonTxtColor, onSubmit, label1, label2, label3, label1For, label2For, label3For, type1, type2, type3, inputName1, inputName2, inputName3}) {
    return (
        <div>
           <form className='form_template'>
               <h2>{formTitle}</h2>
               <label for={label1For}> {label1}</label><br/>
               <input name={inputName1} type={type1} id={label1For}></input><br/><br/>
               <label for={label2For}> {label2}</label><br />
               <input name={inputName2} type={type2} id={label2For}></input><br/><br/>
               <label for={label3For}> {label3}</label><br/>
               <input name={inputName3} type={type3} id={label3For}></input><br/><br/>
               <Button label={buttonLabel} onClick={onSubmit} backgroundColor={buttonColor} color={buttonTxtColor}></Button>
           </form>
        </div>
    );
}

Form.propTypes = {
    formTitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    onSubmit: PropTypes.func,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label1For: PropTypes.string,
    label2For: PropTypes.string,
    label3For: PropTypes.string,
    type1: PropTypes.string,
    type2: PropTypes.string,
    type3: PropTypes.string,
    inputName1: PropTypes.string,
    inputName2: PropTypes.string,
    inputName3: PropTypes.string
}

Form.defaultProps = {
    formTitle: null,
    buttonLabel: null,
    onSubmit: undefined,
    label1: null,
    label2: null,
    label3: null,
    label1For: null,
    label2For: null,
    label3For: null,
    type1: null,
    type2: null,
    type3: null,
    inputName1: null,
    inputName2: null,
    inputName3: null
}
