import React from 'react';
import Register2 from './Register2';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button,
    TouchableHighlight } from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={[styles.text]}>
                Register
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email Address'
                    autoCapitalize="none"
                    placeholderTextColor='#2D2950'
                    onChangeText={val => this.onChangeText('emailaddress', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}

                 />      
                 <TouchableHighlight style={styles.nextbutton}>
                        <Button title="NEXT" 
                        color='white'
                        onPress={() => {}}></Button>
                </TouchableHighlight>
            
            </KeyboardAvoidingView>
        )};
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
     },
     text: {
        fontSize: 48,
        marginTop: 85,
        },
     input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
      nextbutton: {
        backgroundColor: 'white',
        borderRadius:5,
        height:45,
        alignContent: 'center',
        borderColor: '#2D2950',
        borderWidth: 2,
        width:180,
        height: 50,
      },
    })