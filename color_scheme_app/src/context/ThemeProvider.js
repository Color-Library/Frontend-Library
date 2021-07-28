import ThemeContext from './ThemeContext';
import configData from '../context/config.json';
import { useContext } from 'react';

const colorTheme = {
    tester: {
        color: 'red',
        backgroundColor: 'red',
    },
    frozen2: {
        color: configData.THEME_COLORS.FROZEN2.color,
        backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
    },
    sunflower1: {
        color: configData.THEME_COLORS.SUNFLOWER1.color,
        backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
    },
    perwinkles1: {
        color: configData.THEME_COLORS.PERWINKLES1.color,
        backgroundColor: configData.THEME_COLORS.PERWINKLES1.backgroundColor,
    },
    spring1: {
        color: configData.THEME_COLORS.SPRING1.color,
        backgroundColor: configData.THEME_COLORS.SPRING1.backgroundColor,
    },
    sanjuan1: {
        color: configData.THEME_COLORS.SANJUAN1.color,
        backgroundColor: configData.THEME_COLORS.SANJUAN1.backgroundColor,
    },
    seafoam1: {
        color: configData.THEME_COLORS.SEAFOAM1.color,
        backgroundColor: configData.THEME_COLORS.SEAFOAM1.backgroundColor,
    },
    coral1: {
        color: configData.THEME_COLORS.CORAL1.color,
        backgroundColor: configData.THEME_COLORS.CORAL1.backgroundColor,
    }
}


function ThemeProvider({ children, theme }){
    
    const themeName = colorTheme[theme]
    console.log('name', themeName);

    return (
        <ThemeContext.Provider value={themeName}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeContext);
    
    if(!context){
        throw new Error(`This theme either doesn't exist or is written incorrectly`);
    }
    return context
}

export {
    ThemeProvider,
    useTheme,
}
