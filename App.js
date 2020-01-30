import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <View style={{ backgroundColor: 'black', flex: 3,justifyContent:'center',alignItems:'center' }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
        />
        <Text style={styles.textStyle}>
          Wellcome To My App
        </Text>
      </View>

      <View style={{ backgroundColor: 'black', flex: 4,justifyContent:'center' }}>
        <Text style={{ color: 'white', fontWeight: '100', fontSize: 20 }}> This section for form input</Text>
      </View>

      <View style={{ backgroundColor: 'black', flex: 3,justifyContent:'center'}}>
        <Text style={{ color: 'white', fontWeight: '100', fontSize: 20 }}> This section for Don't have an account ?</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
  },
  logoStyle: {
    backgroundColor: "red"
  }

});
