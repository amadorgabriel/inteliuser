import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SigIn } from "./pages/SigIn";
import { isAuth } from "./utils/isAuth";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const isAuthenticated = isAuth();

  if (!isAuthenticated) return <Redirect to="/" />;

  return <Route {...rest} />;
};

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={SigIn} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
