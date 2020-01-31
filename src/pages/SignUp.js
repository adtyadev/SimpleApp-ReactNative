import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
import KeyboardShift from '../components/KeyboardShift.js';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Logo from '../components/Logo.js';
import Form from '../components/Form.js';
import Styles from '../css/Styles.js';

export default class SignUp extends Component {

    login(){
        Actions.login();
    }
    render() {

        return (
            <View style={Styles.container}>
            <StatusBar
              barStyle="light-content"
            />
                <SafeAreaView style={Styles.container}>
                    <ScrollView style={{}}
                        showsVerticalScrollIndicator={false}
                    >
                        <Logo />
                        <Form />
                        <Text style={Styles.textSignUpStyle}> Already have an account ? </Text>
                        <TouchableOpacity onPress={this.login}><Text style={Styles.textSignUpStyle}>Login</Text></TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
                <KeyboardSpacer />
            </View>

        )

    }
}

const styles = StyleSheet.create({
});

