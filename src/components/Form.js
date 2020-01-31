import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Styles from '../css/Styles'
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
                        <Text style={Styles.textButtonStyle}> Continue</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})