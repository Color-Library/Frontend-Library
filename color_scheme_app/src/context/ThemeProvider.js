import themeContext from './ThemeContext';
import configData from '../context/config.json';

const ThemeProvider = ({ children, theme }) => {

    const colorTheme = {
        tester: {
            color: 'red',
            backgroundColor: "red",
        },
        frozen2: {
            color: configData.THEME_COLORS.FROZEN2.color,
            backgroundColor: configData.THEME_COLORS.FROZEN2.backgroundColor,
        },
    }

    const themeName = colorTheme[theme]
    console.log(themeName);

    return (
        <themeContext.provider value={colorTheme}>
            {children}
        </themeContext.provider>
    )
}

export default ThemeProvider
