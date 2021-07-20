/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    TouchableHighlight,
    Platform,
} from 'react-native'; 


import Login from './components/Login';
import Register from './components/Register';

export default class BusTicket extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={[styles.text]}>
                ticket
                </Text>
                <Image 
                style={styles.image}
                source={require('./assets/busimage.jpg')}
                >  
                 </Image>

                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight style={styles.loginbutton}>
                        <Button title="LOG IN" 
                        color='#2D2950'
                        onPress={() => {}}></Button>
                    </TouchableHighlight>
                <TouchableHighlight style={styles.registerbutton}>
                        <Button title="REGISTER" 
                        color='white'
                        onPress={() => {}}></Button>
                    </TouchableHighlight>
                </View>
                
            </View>  

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
     },
 
    text: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto', //get right font
    fontSize: 48,
    marginStart: 270,
    marginTop: 85,
    }, 

    image: {
      width: 575,
      height: 670, 
      marginStart: 0,
    },

    loginbutton: {
        marginRight:10,
        backgroundColor: 'white',
        borderRadius:5,
        height:45,
        alignContent: 'center',
        borderColor: '#2D2950',
        borderWidth: 2,
        width:180,
        height: 50,
      },
    registerbutton: {
        backgroundColor: '#2D2950',
        borderRadius:5,
        height:45,
        alignContent: 'center',
        borderWidth: 2,
        width:180,
        marginStart: 44,
        height: 50,
    }
 });
 