import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { themes } from "./themes";
import { fab, faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faEllipsisV,
  faEllipsisH,
  faPause,
  faPlay,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPause,
  faEllipsisH,
  faEllipsisV,
  faPlus,
  faPlay,
  faSpotify,
  faTimes
);

const AppContainer = () => {
  const [theme, setTheme] = React.useState(themes[0]);

  const handleThemeSwitching = (selectedTheme: DefaultTheme) =>
    setTheme(selectedTheme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RecoilRoot>
          <App handleThemeSwitching={handleThemeSwitching} />
        </RecoilRoot>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
