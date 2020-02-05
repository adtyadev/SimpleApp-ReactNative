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
import {SliderBox} from "react-native-image-slider-box";
import KeyboardShift from '../components/KeyboardShift';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Logo from '../components/Logo';
import Form from '../components/FormLogin';
import Styles from '../css/Styles';
import {
    Actions
} from 'react-native-router-flux';
export default class FrontPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../img/Capture.png'),          // Local image
          ]
        };
      }

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
                        <SliderBox images={this.state.images} />
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

