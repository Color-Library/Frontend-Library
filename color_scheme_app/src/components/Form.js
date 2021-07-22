import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button.js';
import "../styles/Form.css"
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function Form({formTitle, buttonLabel, buttonColor, buttonTxtColor, onSubmit, label1, label2, label3, label4, label1For, label2For, label3For, label4For, type1, type2, type3, type4, inputName1, inputName2, inputName3, inputName4}) {
    return (
        <div className='form_container'>
            <div className='inner_border'>
                <div className='third_border'>
           <form className='form_template'>
               <h2 className='title_txt'>{formTitle}</h2>
               <label for={label1For}> <h4 className='label_txt'>{label1}</h4></label>
               <OutlinedInput name={inputName1} type={type1} id={label1For}></OutlinedInput>
               <label for={label2For}> <h4 className='label_txt'>{label2}</h4></label>
               <OutlinedInput name={inputName2} type={type2} id={label2For}></OutlinedInput>
               <label for={label3For}> <h4 className='label_txt'>{label3}</h4></label>
               <OutlinedInput name={inputName3} type={type3} id={label3For}></OutlinedInput><br/>
               <label for={label4For}> <h4 className='label_txt'>{label4}</h4></label>
               <OutlinedInput name={inputName4} type={type4} id={label4For}></OutlinedInput><br/><br/><br/>
               <Button label={buttonLabel} onClick={onSubmit} backgroundColor={buttonColor} color={buttonTxtColor}></Button>
           </form>
           </div>
           </div>
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
    buttonLabel: null,
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
