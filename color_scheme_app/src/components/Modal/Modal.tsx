import "./Modal.css"
import { useTheme } from '../../context/ThemeProvider';

export interface ModalProps {
    content?: any,
    bgcolor?: string,
    label?: string,
    color?: string,
    border?: string,
    name: string,
}

const Modal = ({
    content = 'content goes here',
    bgcolor,
    border,
    label = 'Modal',
    color,
    name 
}: ModalProps) => {
    const theme = useTheme();
    const style = {
        background: bgcolor ? bgcolor : theme.btnBackgroundColor,
        border: border ? '2px solid' + border : theme.btnBorderColor,
        color: color ? color : theme.btnTxtColor,
    }

    const exitColor = {
        background: bgcolor ? bgcolor : theme.btnBackgroundColor,
        color: color ? color : theme.btnTxtColor,
    }

    return (
        <>
            <a href={"#openModal-" + name} className="modal" style={style}>{label}</a>
            <div id={"openModal-" + name} className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close" style={exitColor}>X</a>
                    <h2>Modal</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}

export default Modal
