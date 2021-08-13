import { createContext } from 'react';

export interface AppContextIF {
    theme?: any;
    btnTxtColor?: string,
    btnBackgroundColor?: string,
}

const ThemeContext = createContext<AppContextIF | null>(null);

export default ThemeContext;
