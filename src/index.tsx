import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <StyleProvider>
            <ThemeProvider theme={volvo}>
                <App />
            </ThemeProvider>
        </StyleProvider>
    </BrowserRouter>,

    document.getElementById("root")
);