import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store/ConfigureStore";
import Theme from "./styles/ThemeProvider";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Dashboard />
        <GlobalStyles />
      </Theme>
    </Provider>
  );
};

export default App;
