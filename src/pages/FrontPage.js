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
import Form from '../components/FormLogin';
import Styles from '../css/Styles';
import {
    Actions
} from 'react-native-router-flux';
export default class FrontPage extends Component {

    goBack(){
        Actions.pop();
    }
    render() {

        return (
            <View style={Styles.container}>
                <SafeAreaView style={Styles.container}>
                    <ScrollView style={{}}
                        showsVerticalScrollIndicator={false}
                    >
                        <Logo />
                        <Text style={Styles.textSignUpStyle}> Halaman Pertama </Text>
                    </ScrollView>
                </SafeAreaView>
                <KeyboardSpacer />
            </View>

        )

    }
}

const styles = StyleSheet.create({
});

