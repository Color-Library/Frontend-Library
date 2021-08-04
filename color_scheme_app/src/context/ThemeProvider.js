import ThemeContext from './ThemeContext';
import configData from '../context/config.json';
import { useContext } from 'react';

//Buttons, Pages, Icons, Footers, Spinners
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
        borderContent: configData.THEME_COLORS.FROZEN2.borderContent,
        //pages
        pageContent: configData.THEME_COLORS.FROZEN2.pageContent,
        pageBorderColor: configData.THEME_COLORS.FROZEN2.pageBorderColor,
        pageBorderType: configData.THEME_COLORS.FROZEN2.pageBorderType,
        pagePadding: configData.THEME_COLORS.FROZEN2.pagePadding,
        pageBoxShadow: configData.THEME_COLORS.FROZEN2.pageBoxShadow,
        pageBorderRadius: configData.THEME_COLORS.FROZEN2.pageBorderRadius,
        pageHeight: configData.THEME_COLORS.FROZEN2.pageHeight,
        pageWidth: configData.THEME_COLORS.FROZEN2.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.FROZEN2.ImageLink,
       ImageBorder: configData.THEME_COLORS.FROZEN2.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.FROZEN2.tab1,
       tab2: configData.THEME_COLORS.FROZEN2.tab2,
       tab3: configData.THEME_COLORS.FROZEN2.tab3,
       tab4: configData.THEME_COLORS.FROZEN2.tab4,
       hBackgroundColor: configData.THEME_COLORS.FROZEN2.hBackgroundColor,
       href: configData.THEME_COLORS.FROZEN2.href,
       href2: configData.THEME_COLORS.FROZEN2.href2,
       href3: configData.THEME_COLORS.FROZEN2.href3,
       href4: configData.THEME_COLORS.FROZEN2.href4,
       hColor: configData.THEME_COLORS.FROZEN2.hColor,
       hLogo: configData.THEME_COLORS.FROZEN2.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.FROZEN2.formTitle,
       formContent: configData.THEME_COLORS.FROZEN2.formContent,
       formTxtColor: configData.THEME_COLORS.FROZEN2.formTxtColor,
       formBorder: configData.THEME_COLORS.FROZEN2.formBorder,
       formBorderType: configData.THEME_COLORS.FROZEN2.formBorderType,
       onSubmit: configData.THEME_COLORS.FROZEN2.onSubmit,
       action: configData.THEME_COLORS.FROZEN2.action,
       method: configData.THEME_COLORS.FROZEN2.method,
       formId: configData.THEME_COLORS.FROZEN2.formId,


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
        borderContent: configData.THEME_COLORS.SUNFLOWER1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.SUNFLOWER1.pageContent,
       pageBorderColor: configData.THEME_COLORS.SUNFLOWER1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.SUNFLOWER1.pageBorderType,
       pagePadding: configData.THEME_COLORS.SUNFLOWER1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.SUNFLOWER1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.SUNFLOWER1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.SUNFLOWER1.pageHeight,
       pageWidth: configData.THEME_COLORS.SUNFLOWER1.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.SUNFLOWER1.ImageLink,
       ImageBorder: configData.THEME_COLORS.SUNFLOWER1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.SUNFLOWER1.tab1,
       tab2: configData.THEME_COLORS.SUNFLOWER1.tab2,
       tab3: configData.THEME_COLORS.SUNFLOWER1.tab3,
       tab4: configData.THEME_COLORS.SUNFLOWER1.tab4,
       hBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.hBackgroundColor,
       hColor: configData.THEME_COLORS.SUNFLOWER1.hColor,
       href: configData.THEME_COLORS.SUNFLOWER1.href,
       href2: configData.THEME_COLORS.SUNFLOWER1.href2,
       href3: configData.THEME_COLORS.SUNFLOWER1.href3,
       href4: configData.THEME_COLORS.SUNFLOWER1.href4,
       hLogo: configData.THEME_COLORS.SUNFLOWER1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.SUNFLOWER1.formTitle,
       formContent: configData.THEME_COLORS.SUNFLOWER1.formContent,
       formTxtColor: configData.THEME_COLORS.SUNFLOWER1.formTxtColor,
       formBorder: configData.THEME_COLORS.SUNFLOWER1.formBorder,
       formBorderType: configData.THEME_COLORS.SUNFLOWER1.formBorderType,
       onSubmit: configData.THEME_COLORS.SUNFLOWER1.onSubmit,
       action: configData.THEME_COLORS.SUNFLOWER1.action,
       method: configData.THEME_COLORS.SUNFLOWER1.method,
       formId: configData.THEME_COLORS.SUNFLOWER1.formId,

    },
    periwinkles1: {
        //button
        btnTxtColor: configData.THEME_COLORS.PERIWINKLES1.btnTxtColor,
        btnBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
        btnWidth: configData.THEME_COLORS.PERIWINKLES1.btnWidth,
        btnLabel: configData.THEME_COLORS.PERIWINKLES1.btnLabel,
        btnHeight: configData.THEME_COLORS.PERIWINKLES1.btnHeight,
        btnBorderColor: configData.THEME_COLORS.PERIWINKLES1.btnBorderColor,
        //border
        color: configData.THEME_COLORS.PERIWINKLES1.color,
        backgroundColor: configData.THEME_COLORS.PERIWINKLES1.backgroundColor,
        borderBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.borderBackgroundColor,
        borderOuterBorder: configData.THEME_COLORS.PERIWINKLES1.borderOuterBorder,
        borderMidBorder: configData.THEME_COLORS.PERIWINKLES1.borderMidBorder,
        borderInnerBorder: configData.THEME_COLORS.PERIWINKLES1.borderInnerBorder,
        borderTxtColor: configData.THEME_COLORS.PERIWINKLES1.borderTxtColor,
        borderContent: configData.THEME_COLORS.PERIWINKLES1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.PERIWINKLES1.pageContent,
       pageBorderColor: configData.THEME_COLORS.PERIWINKLES1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.PERIWINKLES1.pageBorderType,
       pagePadding: configData.THEME_COLORS.PERIWINKLES1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.PERIWINKLES1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.PERIWINKLES1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.PERIWINKLES1.pageHeight,
       pageWidth: configData.THEME_COLORS.PERIWINKLES1.pageWidth,

       //Icon
       ImageLink: configData.THEME_COLORS.PERIWINKLES1.ImageLink,
       ImageBorder: configData.THEME_COLORS.PERIWINKLES1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.PERIWINKLES1.tab1,
       tab2: configData.THEME_COLORS.PERIWINKLES1.tab2,
       tab3: configData.THEME_COLORS.PERIWINKLES1.tab3,
       tab4: configData.THEME_COLORS.PERIWINKLES1.tab4,
       hBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.hBackgroundColor,
       hColor: configData.THEME_COLORS.PERIWINKLES1.hColor,
       href: configData.THEME_COLORS.PERIWINKLES1.href,
       href2: configData.THEME_COLORS.PERIWINKLES1.href2,
       href3: configData.THEME_COLORS.PERIWINKLES1.href3,
       href4: configData.THEME_COLORS.PERIWINKLES1.href4,
       hLogo: configData.THEME_COLORS.PERIWINKLES1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.PERIWINKLES1.formTitle,
       formContent: configData.THEME_COLORS.PERIWINKLES1.formContent,
       formTxtColor: configData.THEME_COLORS.PERIWINKLES1.formTxtColor,
       formBorder: configData.THEME_COLORS.PERIWINKLES1.formBorder,
       formBorderType: configData.THEME_COLORS.PERIWINKLES1.formBorderType,
       onSubmit: configData.THEME_COLORS.PERIWINKLES1.onSubmit,
       action: configData.THEME_COLORS.PERIWINKLES1.action,
       method: configData.THEME_COLORS.PERIWINKLES1.method,
       formId: configData.THEME_COLORS.PERIWINKLES1.formId,

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
        borderContent: configData.THEME_COLORS.SPRING1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.SPRING1.pageContent,
       pageBorderColor: configData.THEME_COLORS.SPRING1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.SPRING1.pageBorderType,
       pagePadding: configData.THEME_COLORS.SPRING1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.SPRING1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.SPRING1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.SPRING1.pageHeight,
       pageWidth: configData.THEME_COLORS.SPRING1.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.SPRING1.ImageLink,
       ImageBorder: configData.THEME_COLORS.SPRING1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.SPRING1.tab1,
       tab2: configData.THEME_COLORS.SPRING1.tab2,
       tab3: configData.THEME_COLORS.SPRING1.tab3,
       tab4: configData.THEME_COLORS.SPRING1.tab4,
       hBackgroundColor: configData.THEME_COLORS.SPRING1.hBackgroundColor,
       hColor: configData.THEME_COLORS.SPRING1.hColor,
       href: configData.THEME_COLORS.SPRING1.href,
       href2: configData.THEME_COLORS.SPRING1.href2,
       href3: configData.THEME_COLORS.SPRING1.href3,
       href4: configData.THEME_COLORS.SPRING1.href4,
       hLogo: configData.THEME_COLORS.SPRING1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.SPRING1.formTitle,
       formContent: configData.THEME_COLORS.SPRING1.formContent,
       formTxtColor: configData.THEME_COLORS.SPRING1.formTxtColor,
       formBorder: configData.THEME_COLORS.SPRING1.formBorder,
       formBorderType: configData.THEME_COLORS.SPRING1.formBorderType,
       onSubmit: configData.THEME_COLORS.SPRING1.onSubmit,
       action: configData.THEME_COLORS.SPRING1.action,
       method: configData.THEME_COLORS.SPRING1.method,
       formId: configData.THEME_COLORS.SPRING1.formId,

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
        borderContent: configData.THEME_COLORS.SANJUAN1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.SANJUAN1.pageContent,
       pageBorderColor: configData.THEME_COLORS.SANJUAN1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.SANJUAN1.pageBorderType,
       pagePadding: configData.THEME_COLORS.SANJUAN1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.SANJUAN1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.SANJUAN1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.SANJUAN1.pageHeight,
       pageWidth: configData.THEME_COLORS.SANJUAN1.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.SANJUAN1.ImageLink,
       ImageBorder: configData.THEME_COLORS.SANJUAN1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.SANJUAN1.tab1,
       tab2: configData.THEME_COLORS.SANJUAN1.tab2,
       tab3: configData.THEME_COLORS.SANJUAN1.tab3,
       tab4: configData.THEME_COLORS.SANJUAN1.tab4,
       hBackgroundColor: configData.THEME_COLORS.SANJUAN1.hBackgroundColor,
       hColor: configData.THEME_COLORS.SANJUAN1.hColor,
       href: configData.THEME_COLORS.SANJUAN1.href,
       href2: configData.THEME_COLORS.SANJUAN1.href2,
       href3: configData.THEME_COLORS.SANJUAN1.href3,
       href4: configData.THEME_COLORS.SANJUAN1.href4,
       hLogo: configData.THEME_COLORS.SANJUAN1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.SANJUAN1.formTitle,
       formContent: configData.THEME_COLORS.SANJUAN1.formContent,
       formTxtColor: configData.THEME_COLORS.SANJUAN1.formTxtColor,
       formBorder: configData.THEME_COLORS.SANJUAN1.formBorder,
       formBorderType: configData.THEME_COLORS.SANJUAN1.formBorderType,
       onSubmit: configData.THEME_COLORS.SANJUAN1.onSubmit,
       action: configData.THEME_COLORS.SANJUAN1.action,
       method: configData.THEME_COLORS.SANJUAN1.method,
       formId: configData.THEME_COLORS.SANJUAN1.formId,
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
        borderContent: configData.THEME_COLORS.SEAFOAM1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.SEAFOAM1.pageContent,
       pageBorderColor: configData.THEME_COLORS.SEAFOAM1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.SEAFOAM1.pageBorderType,
       pagePadding: configData.THEME_COLORS.SEAFOAM1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.SEAFOAM1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.SEAFOAM1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.SEAFOAM1.pageHeight,
       pageWidth: configData.THEME_COLORS.SEAFOAM1.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.SEAFOAM1.ImageLink,
       ImageBorder: configData.THEME_COLORS.SEAFOAM1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.SEAFOAM1.tab1,
       tab2: configData.THEME_COLORS.SEAFOAM1.tab2,
       tab3: configData.THEME_COLORS.SEAFOAM1.tab3,
       tab4: configData.THEME_COLORS.SEAFOAM1.tab4,
       hBackgroundColor: configData.THEME_COLORS.SEAFOAM1.hBackgroundColor,
       hColor: configData.THEME_COLORS.SEAFOAM1.hColor,
       href: configData.THEME_COLORS.SEAFOAM1.href,
       href2: configData.THEME_COLORS.SEAFOAM1.href2,
       href3: configData.THEME_COLORS.SEAFOAM1.href3,
       href4: configData.THEME_COLORS.SEAFOAM1.href4,
       hLogo: configData.THEME_COLORS.SEAFOAM1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.SEAFOAM1.formTitle,
       formContent: configData.THEME_COLORS.SEAFOAM1.formContent,
       formTxtColor: configData.THEME_COLORS.SEAFOAM1.formTxtColor,
       formBorder: configData.THEME_COLORS.SEAFOAM1.formBorder,
       formBorderType: configData.THEME_COLORS.SEAFOAM1.formBorderType,
       onSubmit: configData.THEME_COLORS.SEAFOAM1.onSubmit,
       action: configData.THEME_COLORS.SEAFOAM1.action,
       method: configData.THEME_COLORS.SEAFOAM1.method,
       formId: configData.THEME_COLORS.SEAFOAM1.formId,
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
        borderContent: configData.THEME_COLORS.CORAL1.borderContent,
       //pages
       pageContent: configData.THEME_COLORS.CORAL1.pageContent,
       pageBorderColor: configData.THEME_COLORS.CORAL1.pageBorderColor,
       pageBorderType: configData.THEME_COLORS.CORAL1.pageBorderType,
       pagePadding: configData.THEME_COLORS.CORAL1.pagePadding,
       pageBoxShadow: configData.THEME_COLORS.CORAL1.pageBoxShadow,
       pageBorderRadius: configData.THEME_COLORS.CORAL1.pageBorderRadius,
       pageHeight: configData.THEME_COLORS.CORAL1.pageHeight,
       pageWidth: configData.THEME_COLORS.CORAL1.pageWidth,
       //Icon
       ImageLink: configData.THEME_COLORS.CORAL1.ImageLink,
       ImageBorder: configData.THEME_COLORS.CORAL1.ImageBorder,
       //Header
       tab1: configData.THEME_COLORS.CORAL1.tab1,
       tab2: configData.THEME_COLORS.CORAL1.tab2,
       tab3: configData.THEME_COLORS.CORAL1.tab3,
       tab4: configData.THEME_COLORS.CORAL1.tab4,
       hBackgroundColor: configData.THEME_COLORS.CORAL1.hBackgroundColor,
       hColor: configData.THEME_COLORS.CORAL1.hColor,
       href: configData.THEME_COLORS.CORAL1.href,
       href2: configData.THEME_COLORS.CORAL1.href2,
       href3: configData.THEME_COLORS.CORAL1.href3,
       href4: configData.THEME_COLORS.CORAL1.href4,
       hLogo: configData.THEME_COLORS.CORAL1.hLogo,
       //Form
       formTitle: configData.THEME_COLORS.CORAL1.formTitle,
       formContent: configData.THEME_COLORS.CORAL1.formContent,
       formTxtColor: configData.THEME_COLORS.CORAL1.formTxtColor,
       formBorder: configData.THEME_COLORS.CORAL1.formBorder,
       formBorderType: configData.THEME_COLORS.CORAL1.formBorderType,
       onSubmit: configData.THEME_COLORS.CORAL1.onSubmit,
       action: configData.THEME_COLORS.CORAL1.action,
       method: configData.THEME_COLORS.CORAL1.method,
       formId: configData.THEME_COLORS.CORAL1.formId,

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
    
    // if(!context){
    //     throw new Error(`This theme either doesn't exist or is written incorrectly`);
    // }
    return context
}

export {
    ThemeProvider,
    useTheme,
}
