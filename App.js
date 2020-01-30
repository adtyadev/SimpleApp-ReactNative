import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Dimensions
} from 'react-native';

import KeyboardShift from './src/components/KeyboardShift.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Constants from 'expo-constants';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  return (

    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.viewFlex3}>
            <Image
              style={{ width: 200, height: 200, margin: 10, marginTop: 20 }}
              source={require('./img/logo.png')}
            />
          </View>

          <View style={styles.viewFlex3}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="aditya-kharisma@app.native.com"
              keyboardType="email-address"
              onSubmitEditing={() => this.password.focus()}
              blurOnSubmit={false}
            />

            <TextInput
              style={styles.textInputStyle}
              placeholder="password"
              secureTextEntry={true}
              ref={(input) => this.password = input}
            />

            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.textButtonStyle}> Login</Text>
            </TouchableOpacity>

          </View>

          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <Text style={styles.textSignUpStyle}> Don't have an account ?
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}> Sign In </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <KeyboardSpacer />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    height: ((Dimensions.get('window').height) - 100)

    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 0,
  },
  viewFlex3: {
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',

  },

  logoStyle: {
    backgroundColor: "red"
  },

  textStyle: {
    color: 'white',
    fontSize: 20
  },

  textInputStyle: {
    marginTop: 20,
    height: 60,
    width: 350,
    borderColor: '#263238',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
    fontSize: 20,
    paddingHorizontal: 15
  },

  buttonStyle: {
    marginTop: 50,
    height: 60,
    width: 350,
    fontWeight: '500',
    borderColor: '#263238',
    borderWidth: 1,
    backgroundColor: '#424242',
    textAlign: 'center',
    borderRadius: 50,
    fontSize: 20,
    paddingHorizontal: 15
  },
  textButtonStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: "500",
    textAlign: 'center',
    paddingTop: 12
  },
  textSignUpStyle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 20,
    textAlign: 'center',
  }
});
