import "./Icon.css"
import { useTheme } from '../../context/ThemeProvider';

export interface IconProps {
    imageLink?: string,
    imageBorder?: string,
}

const Icon = ({
    imageBorder,
    imageLink = 'https://img.icons8.com/nolan/50/iron-man.png',
}: IconProps) => {
    const theme = useTheme();

    const style = {
        border: imageBorder ? '10px solid' + imageBorder : '10px solid' + theme.btnBackgroundColor,
    }

    return(
        <div>
           <img className='imgStyle' style={style} src={imageLink} alt="iconpic"/>
           <div/>
        </div>
    );
}

export default Icon
