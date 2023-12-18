import { getUser } from "../services/authorize";
import { Router, Redirect } from "react-router-dom";

export default function AdminRoute({ component: Component, ...rest }) {
  <Router
    {...rest}
    render={(props) => {
      getUser() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      );
    }}
  />;
}
