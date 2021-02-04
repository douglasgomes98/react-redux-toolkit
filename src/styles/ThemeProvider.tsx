import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../store/ConfigureStore";
import { dark, light } from "./themes";

const Theme: React.FC = ({ children }) => {
  const {theme} = useSelector((state: RootState) => state.theme);

  const currentTheme = theme.currentTheme === "light" ? light : dark;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
