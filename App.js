import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';

import KeyboardShift from './src/components/KeyboardShift.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Logo from './src/components/Logo.js';
import Form from './src/components/Form.js';
import Styles from './src/css/Styles.js'
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

    <View style={Styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <SafeAreaView style={Styles.container}>
        <ScrollView style={{}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Logo />
          <Form />
        </ScrollView>
      </SafeAreaView>
      <KeyboardSpacer />
    </View>

  );
}

const styles = StyleSheet.create({
});
