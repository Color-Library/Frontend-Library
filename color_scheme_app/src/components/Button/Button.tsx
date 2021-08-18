import React from 'react';
import "./Button.css";
import { useTheme } from '../../context/ThemeProvider';

export interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";

  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button = ({
  backgroundColor,
  color,
  size = "medium",
  onClick,
  label = "Button",
}: ButtonProps) => {
  const theme = useTheme();
  const style = {
    backgroundColor: backgroundColor ? backgroundColor : theme.btnBackgroundColor,
    color: color ? color : theme.btnTxtColor,
  };
  return (
    <button
    className={["buttonTemplate", `buttonTemplate--${size}`].join(" ")}
    style={style}
    onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button