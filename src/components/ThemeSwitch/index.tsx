import { SwitchWrapper, Switch, SwitchLabel } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/modules/theme/Theme.store";
import { RootState } from "../../store/ConfigureStore";
import { Theme } from "../../store/modules/theme/types";

export default function ThemeSwitch() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  function handleToggle() {
    const newTheme: Theme = {
      currentTheme: theme.currentTheme === "light" ? "dark" : theme.currentTheme,
    };
    dispatch(changeTheme(newTheme));
  }

  return (
    <SwitchWrapper onClick={() => handleToggle()}>
      <Switch id="checkbox" type="checkbox" />
      <SwitchLabel htmlFor="checkbox" />
    </SwitchWrapper>
  );
}
