import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Show from "./components/Show/Show";

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:videoId" component={Show} />
      </Switch>
    </BrowserRouter>
  );
};

export default app;
