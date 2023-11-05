import React from "react";
import Home from "../Components/Home";
import OrderPizza from "../Components/OrderPizza";
import Success from "../Components/Success";
import { Switch, Route } from "react-router-dom";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order" exact>
          <OrderPizza />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
