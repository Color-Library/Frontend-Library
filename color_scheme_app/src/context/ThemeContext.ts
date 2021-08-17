import { createContext } from 'react';

export interface AppContextIF {
    theme?: any;
    btnTxtColor?: string,
    btnBackgroundColor?: string,
    hBackgroundColor?: string,
    hColor?: string,
    borderOuterBorder?: string,
    borderMidBorder?: string,
    borderInnerBorder?: string,
    borderTxtColor?: string,
    formBorder?: string,
    btnBorderColor?: string,
    formTitle?: string,
    formBorderType?:string,
    formTxtColor?: string,
    formContent?: string,
    onSubmit?: any,
    action?: any,
    method?: any,
    formId?: string,
    imageBorder?: string,
    imageLink?: string,
}

const ThemeContext = createContext<AppContextIF | null>(null);

export default ThemeContext;
