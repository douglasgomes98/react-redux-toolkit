import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/modules/theme/Theme.store";
import { RootState } from "../../store/ConfigureStore";
import { Theme } from "../../store/modules/theme/types";
import Switch from "react-switch";
import { useTheme } from "styled-components";

const ThemeSwitch: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const styledTheme = useTheme();
  const dispatch = useDispatch();

  function handleToggle() {
    const newTheme: Theme = {
      currentTheme: theme.currentTheme === "light" ? "dark" : "light",
    };
    dispatch(changeTheme(newTheme));
  }

  return (
    <Switch
      onChange={() => handleToggle()}
      checked={theme.currentTheme === "dark"}
      uncheckedIcon={false}
      checkedIcon={false}
      onColor={styledTheme.colors.ternary}
      offColor={styledTheme.colors.ternary}
    />
  );
};

export default ThemeSwitch;
