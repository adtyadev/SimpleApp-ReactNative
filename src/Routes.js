import React, {Component} from 'react';
import { 
    View,
} from 'react-native';

import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default class Routes extends Component{
    render(){
        return(
    <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="signUp" component={SignUp} title="SignUp" initial={true} />
      <Scene key="login" component={Login} title="Login" />
    </Stack>
  </Router>
        )
    }
}