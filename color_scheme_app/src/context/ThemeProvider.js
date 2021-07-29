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
        borderBackgroundColor: configData.THEME_COLORS.FROZEN2.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.FROZEN2.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.FROZEN2.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.FROZEN2.borderInnerBorder
    },
    sunflower1: {
        color: configData.THEME_COLORS.SUNFLOWER1.color,
        backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SUNFLOWER1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SUNFLOWER1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SUNFLOWER1.borderInnerBorder
    },
    perwinkles1: {
        color: configData.THEME_COLORS.PERWINKLES1.color,
        backgroundColor: configData.THEME_COLORS.PERWINKLES1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.PERWINKLES1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.PERWINKLES1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.PERWINKLES1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.PERWINKLES1.borderInnerBorder
    },
    spring1: {
        color: configData.THEME_COLORS.SPRING1.color,
        backgroundColor: configData.THEME_COLORS.SPRING1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SPRING1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SPRING1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SPRING1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SPRING1.borderInnerBorder
    },
    sanjuan1: {
        color: configData.THEME_COLORS.SANJUAN1.color,
        backgroundColor: configData.THEME_COLORS.SANJUAN1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SANJUAN1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SANJUAN1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SANJUAN1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SANJUAN1.borderInnerBorder
    },
    seafoam1: {
        color: configData.THEME_COLORS.SEAFOAM1.color,
        backgroundColor: configData.THEME_COLORS.SEAFOAM1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SEAFOAM1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SEAFOAM1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SEAFOAM1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SEAFOAM1.borderInnerBorder
    },
    coral1: {
        color: configData.THEME_COLORS.CORAL1.color,
        backgroundColor: configData.THEME_COLORS.CORAL1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.CORAL1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.CORAL1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.CORAL1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.CORAL1.borderInnerBorder
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
