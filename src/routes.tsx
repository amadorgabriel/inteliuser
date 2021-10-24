import { useRef } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { HtmlToastElement, Toast } from "./components/Toast";
import { Dashboard } from "./pages/Dashboard";
import { SigIn } from "./pages/SigIn";
import { isAuth } from "./utils/isAuth";

interface PrivateRouteProps extends RouteProps { }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const isAuthenticated = isAuth();
  const toastRef = useRef<HtmlToastElement>(null);

  if (!isAuthenticated) {
    toastRef.current?.showToast(
      "Você precisa fazer o login antes",
      "error"
    );

    return <Redirect to="/" />;
  }

  return (
    <>
      <Route {...rest} />
      <Toast ref={toastRef} />
    </>
  )
};

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={SigIn} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
