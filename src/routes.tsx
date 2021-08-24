import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SigIn } from "./pages/SigIn";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={SigIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
