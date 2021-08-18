import './Input.css';
import { useTheme } from '../../context/ThemeProvider';

export interface InputProps {
    inputBoxColor?: string,
    inputTxtColor?: string,
    txtColor?: string,
    label: string,
    labelFor: string,
    type: string,
    inputName: string,
    requiredTxt?: string,
}

const Input = ({
    inputBoxColor,
    inputTxtColor,
    txtColor,
    label = 'Username',
    labelFor = "username",
    type = 'text',
    inputName = 'username',
    requiredTxt = 'this is a required field',
}: InputProps) => {
    const theme = useTheme();

    const style = {
        color: inputTxtColor ? inputTxtColor : theme.btnTxtColor,
        border: inputBoxColor ? inputBoxColor : theme.btnBackgroundColor,
    }
 
    return (
        <div>
            <label htmlFor={labelFor} style={{color: txtColor}}> 
                {label}
            </label>
            <div className="required">{requiredTxt}</div>
            <div>
                <input style={style} className="inputstyle" name={inputName} type={type} id={labelFor} />
            </div>
        </div>
    );
}

export default Input
