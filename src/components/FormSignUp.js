import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
import Styles from '../css/Styles'
export default class FormSignUp extends Component {
    continue(){
        Actions.login();
    }
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
                         onPress={this.continue}
                        style={Styles.buttonStyle}>
                        <Text style={Styles.textButtonStyle}> Sign Up</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})