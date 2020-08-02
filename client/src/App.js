import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";
import PNF from "./components/404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Join} />
        <Route path="/chat" exact={true} component={Chat} />
        {/* <Route
          render={() => (
            <h1>
              Page Not Found!
            </h1>
          )}
        /> */}
        {/* the above route is similar to the below one. These are two ways to render components. */}
        <Route component={PNF} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
