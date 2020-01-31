import React, { Component } from 'react';
import{
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
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
})