import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeProvider';

export default function Form({formTitle, formBorder, formBorderType, formTxtColor, formContent, onSubmit, action, method, formId}) {
    const theme = useTheme();
    formTitle = formTitle ? formTitle : theme.formTitle
    formBorder = formBorder ? formBorder : theme.formBorder
    formBorderType = formBorderType ? formBorderType : theme.formBorderType
    formTxtColor = formTxtColor ? formTxtColor : theme.formTxtColor
    formContent = formContent ? formContent : theme.formContent
    onSubmit = onSubmit ? onSubmit : theme.onSubmit
    action = action ? action : theme.action
    method = method ? method : theme.method
    formId = formId ? formId : theme.formId

    return (
        <div style={{border: '10px '+formBorderType+' '+formBorder, padding:'20px'}}>
           <form action={action} method={method} id={formId} onSubmit={onSubmit} className='form_template' style={{color: formTxtColor}}>
               <h2 style={{textAlign:'center'}}>{formTitle}</h2>
               {formContent}
           </form>
        </div>
    );
}

Form.propTypes = {
    formTitle: PropTypes.string,
    formContent: PropTypes.string,
    formTxtColor: PropTypes.string,
    formBorder: PropTypes.string,
    formBorderType: PropTypes.string,
    onSubmit: PropTypes.func,
    action:PropTypes.string, 
    method: PropTypes.string,
    formId: PropTypes.number
}

Form.defaultProps = {
    formTitle: null,
    formContent: null,
    formTxtColor: null,
    formBorder: null,
    formBorderType: null,
    onSubmit: null,
    action: null, 
    method: null, 
    formId: null
}