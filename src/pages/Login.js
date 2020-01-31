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

import KeyboardShift from '../components/KeyboardShift';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Styles from '../css/Styles';
import {
    Actions
} from 'react-native-router-flux';
export default class Login extends Component {

    goBack(){
        Actions.pop();
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
                        <Form type="Login" />
                        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                            <Text style={Styles.textSignUpStyle}> Don't have an account ? </Text>
                           <TouchableOpacity onPress={this.goBack}><Text style={Styles.textSignUpStyle}> Sign In </Text></TouchableOpacity>
                           
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <KeyboardSpacer />
            </View>

        )

    }
}

const styles = StyleSheet.create({
});

