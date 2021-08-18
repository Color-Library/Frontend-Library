import "./Searchbar.css"
import { useTheme } from '../../context/ThemeProvider';

export interface SearchbarProps {
  inputColor?: string,
  htmlfor?: string,
}

const Searchbar = ({
  inputColor,
  htmlfor
}: SearchbarProps) => {
  const theme = useTheme();

  const style = {
    border: `1px solid ${inputColor ? inputColor : theme.btnBackgroundColor}`,
  };

  return (
    <div>
        <label htmlFor={htmlfor}/>
        <input type="text" style={style} className="search-input"/>
    </div>
  );
}

export default Searchbar
