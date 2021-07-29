import ThemeContext from './ThemeContext';
import configData from '../context/config.json';
import { useContext } from 'react';

const colorTheme = {
    tester: {
        color: 'red',
        backgroundColor: 'red',
    },
    frozen2: {
        //button
        btnTxtColor: configData.THEME_COLORS.FROZEN2.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.FROZEN2.btnWidth,
        btnLabel: configData.THEME_COLORS.FROZEN2.btnLabel,
        btnHeight: configData.THEME_COLORS.FROZEN2.btnHeight,
        btnBorderColor: configData.THEME_COLORS.FROZEN2.btnBorderColor,
        //border
        backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.FROZEN2.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.FROZEN2.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.FROZEN2.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.FROZEN2.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.FROZEN2.borderTxtColor,
        borderContent: configData.THEME_COLORS.FROZEN2.borderContent

    },
    sunflower1: {
        //button
        btnTxtColor: configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.SUNFLOWER1.btnWidth,
        btnLabel: configData.THEME_COLORS.SUNFLOWER1.btnLabel,
        btnHeight: configData.THEME_COLORS.SUNFLOWER1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.SUNFLOWER1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.SUNFLOWER1.color,
        backgroundColor: configData.THEME_COLORS.SUNFLOWER1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SUNFLOWER1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SUNFLOWER1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SUNFLOWER1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.SUNFLOWER1.borderTxtColor,
        borderContent: configData.THEME_COLORS.SUNFLOWER1.borderContent


    },
    perwinkles1: {
        //button
        btnTxtColor: configData.THEME_COLORS.PERWINKLES1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.PERWINKLES1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.PERWINKLES1.btnWidth,
        btnLabel: configData.THEME_COLORS.PERWINKLES1.btnLabel,
        btnHeight: configData.THEME_COLORS.PERWINKLES1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.PERWINKLES1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.PERWINKLES1.color,
        backgroundColor: configData.THEME_COLORS.PERWINKLES1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.PERWINKLES1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.PERWINKLES1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.PERWINKLES1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.PERWINKLES1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.PERWINKLES1.borderTxtColor,
        borderContent: configData.THEME_COLORS.PERWINKLES1.borderContent


    },
    spring1: {
        //button
        btnTxtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.SPRING1.btnWidth,
        btnLabel: configData.THEME_COLORS.SPRING1.btnLabel,
        btnHeight: configData.THEME_COLORS.SPRING1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.SPRING1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.SPRING1.color,
        backgroundColor: configData.THEME_COLORS.SPRING1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SPRING1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SPRING1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SPRING1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SPRING1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.SPRING1.borderTxtColor,
        borderContent: configData.THEME_COLORS.SPRING1.borderContent


    },
    sanjuan1: {
        //button
        btnTxtColor: configData.THEME_COLORS.SANJUAN1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.SANJUAN1.btnWidth,
        btnLabel: configData.THEME_COLORS.SANJUAN1.btnLabel,
        btnHeight: configData.THEME_COLORS.SANJUAN1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.SANJUAN1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.SANJUAN1.color,
        backgroundColor: configData.THEME_COLORS.SANJUAN1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SANJUAN1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SANJUAN1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SANJUAN1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SANJUAN1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.SANJUAN1.borderTxtColor,
        borderContent: configData.THEME_COLORS.SANJUAN1.borderContent


    },
    seafoam1: {
        //button
        btnTxtColor: configData.THEME_COLORS.SEAFOAM1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.SEAFOAM1.btnWidth,
        btnLabel: configData.THEME_COLORS.SEAFOAM1.btnLabel,
        btnHeight: configData.THEME_COLORS.SEAFOAM1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.SEAFOAM1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.SEAFOAM1.color,
        backgroundColor: configData.THEME_COLORS.SEAFOAM1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.SEAFOAM1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.SEAFOAM1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.SEAFOAM1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.SEAFOAM1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.SEAFOAM1.borderTxtColor,
        borderContent: configData.THEME_COLORS.SEAFOAM1.borderContent


    },
    coral1: {
        //button
        btnTxtColor: configData.THEME_COLORS.CORAL1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.CORAL1.btnWidth,
        btnLabel: configData.THEME_COLORS.CORAL1.btnLabel,
        btnHeight: configData.THEME_COLORS.CORAL1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.CORAL1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.CORAL1.color,
        backgroundColor: configData.THEME_COLORS.CORAL1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.CORAL1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.CORAL1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.CORAL1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.CORAL1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.CORAL1.borderTxtColor,
        borderContent: configData.THEME_COLORS.CORAL1.borderContent


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
