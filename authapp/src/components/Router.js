import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';
import Home from './Home';


const RouterComponent = () => {
  return (
    <Router>
      <Stack hideNavBar key="root">
        <Stack
          key="auth"
          type="reset"
        >
          <Scene
            title="Sign In"
            key="login"
            component={Login}
            initial
          />
          <Scene
            title="Register"
            key="register"
            component={Register}
          />  
        </Stack>
        <Stack
          key="main"
          type="reset"
        >
          <Scene
            title="Home"
            key="home"
            component={Home}
            initial
          />
        </Stack>
      </Stack>
    </Router>
  );
};


export default RouterComponent;