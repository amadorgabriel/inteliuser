import { Route, Switch } from "react-router-dom";
import { SigIn } from "./pages/SigIn";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={SigIn} />
    </Switch>
  );
};
