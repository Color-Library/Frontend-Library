import React from 'react';
import { useTheme } from '../../context/ThemeProvider';

export interface FormProps {
    formTitle?: string,
    formContent?: any,
    formTxtColor?: string,
    formBorder?: string,
    formBorderType?: string,
    onSubmit?: any, 
    action?: any, 
    method?: any, 
    formId?: string,
}

const Form = ({
    formTitle,
    formBorder,
    formBorderType,
    formTxtColor,
    formContent,
    onSubmit,
    action,
    method,
    formId,
}: FormProps) => {
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

export default Form