import ThemeContext from './ThemeContext';
import configData from '../context/config.json';
import { useContext } from 'react';

const colorTheme = {
    tester: {
        color: "red",
        backgroundColor: "red",
    },
    frozen2: {
        color: configData.THEME_COLORS.FROZEN2.color,
        backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
    },
}


function ThemeProvider({ children, theme }){
    
    const themeName = colorTheme[theme]
    console.log(themeName);

    return (
        <ThemeContext.Provider value={colorTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeContext);
    return context
}

export {
    ThemeProvider,
    useTheme
}
