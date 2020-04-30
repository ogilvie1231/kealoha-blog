import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "../../react-auth0-spa";
import { Button } from "reactstrap";

const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <Button
          color="primary"
          variant="outline-success"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      )}

      {isAuthenticated && <Button
        color="primary"
        variant="outline-success"
        onClick={() => logout()}
      >
        Log out
      </Button>}

      
    </div>
  );
};

export default LoginButton;
