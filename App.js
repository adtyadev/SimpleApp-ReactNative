import React,{useEffect } from 'react';
import {
  StyleSheet, View, Text, StatusBar, RefreshControl
} from 'react-native';

import Styles from './src/css/Styles';
// import SplashScreen from 'react-native-splash-screen';
import Routes from './src/Routes';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export default function App() {
  // useEffect(()=> {
  //   SplashScreen.hide();
  // },[]);
  return (
    <View style={{flex:1}} >
    <StatusBar
        barStyle="light-content"
    />
    <Routes/>
    </View>

  );
}

const styles = StyleSheet.create({
});
