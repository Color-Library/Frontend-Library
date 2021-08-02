import React from 'react';
import PropTypes from 'prop-types';

export default function Form({formTitle, formBorder, formBorderType, formTxtColor, formContent, onSubmit, action, method, formId}) {
    return (
        <div style={{border: '20px '+formBorderType+' '+formBorder}}>
           <form action={action} method={method} id={formId} onSubmit={onSubmit} className='form_template' style={{color: formTxtColor}}>
               <h2>{formTitle}</h2>
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