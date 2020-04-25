import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import FrameOut from "./components/FrameOut";

import { commonRoutes, routers } from "./routers";

const ChilRoute = ({ route }) => {
  return (
    <FrameOut>
      <Switch>
        {route.childrens &&
          route.childrens.map((child) => {
            return <child.component key={child.path} {...child} />;
          })}
        <route.component {...route} />
        <Redirect to="/dashboard" />
      </Switch>
    </FrameOut>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        {routers.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              render={(routeProps) => {
                return <ChilRoute route={route} {...routeProps} />;
              }}
            />
          );
        })}
        {commonRoutes.map((mainRoute) => (
          <mainRoute.component
            key={mainRoute.path}
            path={mainRoute.path}
            {...mainRoute}
          />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}
