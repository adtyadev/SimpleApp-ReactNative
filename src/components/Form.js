import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Styles from '../css/Styles.js'
export default class Form extends Component {
    render() {
        return (
            <View>
                <View style={Styles.viewFlex3}>
                    <TextInput
                        style={Styles.textInputStyle}
                        placeholder="aditya-kharisma@app.native.com"
                        keyboardType="email-address"
                        // onSubmitEditing={()=>this.password.focus()}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        style={Styles.textInputStyle}
                        placeholder="* * * * * *"
                        secureTextEntry={true}
                    // ref={(input)=>this.password = input}
                    />

                    <TouchableOpacity
                        style={Styles.buttonStyle}>
                        <Text style={Styles.textButtonStyle}> Login</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Text style={Styles.textSignUpStyle}> Don't have an account ?
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}> Sign In </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})