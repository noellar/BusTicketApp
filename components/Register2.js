import React from 'react';
import Search from './Search1way';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button,
    TouchableHighlight } from 'react-native';

export default class Register2 extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={[styles.text]}>
                Register
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Number'
                    autoCapitalize="none"
                    placeholderTextColor='#2D2950'
                    onChangeText={val => this.onChangeText('emailaddress', val)}
                />     
                 <TouchableHighlight style={styles.signupbutton}>
                        <Button title="SIGN UP" 
                        color='white'
                        onPress={() => {}}></Button>
                </TouchableHighlight>

                <Text style={[styles.paragraphtext]}>
                By signing up, you agree to BusTicket's Terms of Service and Privacy Policy
            </Text>
            
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
      signupbutton: {
        backgroundColor: 'white',
        borderRadius:5,
        height:45,
        alignContent: 'center',
        borderColor: '#2D2950',
        borderWidth: 2,
        width:180,
        height: 50,
      },
      paragraphtext: {
        fontSize: 12, 
      }
    })