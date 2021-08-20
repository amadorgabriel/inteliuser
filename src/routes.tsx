import { Route, Switch } from "react-router-dom";

import { SigIn } from "./pages/SigIn";
import { SignUp } from "./pages/SignUp";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={SigIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};
