import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Styles from '../css/Styles.js'
export default class Logo extends Component{
    render(){
        return(
            <View style={Styles.viewFlex3}>
            <Image
              style={{ width: 200, height: 200, margin: 10, marginTop: 20 }}
              source={require('../img/logo.png')}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({

})