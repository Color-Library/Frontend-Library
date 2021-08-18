import "./Spinner.css"
import { useTheme } from '../../context/ThemeProvider';

export interface SpinnerProps {
  borderTopColor?: string,
}

const Spinner = ({ borderTopColor }: SpinnerProps) => {
  const theme = useTheme();

    const style = {
        borderTopColor: borderTopColor ? borderTopColor : theme.btnBackgroundColor,
    }

  return (
    <div className="spinner" style={style} />
  );
}

export default Spinner
