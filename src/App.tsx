import HomePage from "./pages/home"
import { Switch, Route, useHistory,} from "react-router-dom";
import React from "react";
function App() {
    let history = useHistory();
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/learn/:id" history={history}>

                </Route>
                <Route exactpath="/shop/:id" history={history}>

                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;