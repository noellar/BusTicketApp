import React from 'react';
import React from './Navigator';
import Book from './Book';
import { StyleSheet, Text, TextInput, Button,
    TouchableHighlight } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text]}>
                Search
                </Text>

                <View style={{width: 341, height: 111, backgroundColor: '#2D2950'}}>

                      <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.locationtext]}>
                          Location Detail
                          </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.locationtext]}>
                          From
                          </Text>
                          <Text style={[styles.locationtext]}>
                          To
                          </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.locationtext]}>
                          From
                          </Text>
                          <Text style={[styles.locationtext]}>
                          To
                          </Text>
                      </View>


                      <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.locationtext]}>
                          Mbarara
                          </Text>
                          <Text style={[styles.locationtext]}>
                          Kampala
                          </Text>
                      </View>
                </View>

               
                <View style={{width: 341, height: 111, backgroundColor: '#FFFFFF'}}>
                      <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.locationtext]}>
                          One Way
                          </Text>
                          <Text style={[styles.locationtext]}>
                          Round Trip
                          </Text>
                      </View>
                </View>

                
                <View style={{flexDirection: 'row'}}>
                      <View style={{width: 162, height: 60, backgroundColor: '#FFFFFF'}}>
                          <Text style={[styles.locationtext]}>
                          5th May 2020
                          </Text>

                      </View>

                      <View style={{width: 162, height: 60, backgroundColor: '#FFFFFF'}}>
                          <Text style={[styles.locationtext]}>
                          5th May 2020
                          </Text>
                        
                      </View>


                </View>
                


                <View style={{flexDirection: 'row'}}>
                      <View style={{width: 162, height: 60, backgroundColor: '#FFFFFF'}}>
                          <Text style={[styles.locationtext]}>
                          Child
                          </Text>

                      </View>

                      <View style={{width: 162, height: 60, backgroundColor: '#FFFFFF'}}>
                          <Text style={[styles.locationtext]}>
                          Seats
                          </Text>

                          <Text style={[styles.locationtext]}>
                          01
                          </Text>
                     </View>
                  </View>



                  <TouchableHighlight style={styles.registerbutton}>
                        <Button title="SEARCH" 
                        color='white'
                        onPress={() => {}}></Button>
                  </TouchableHighlight>

        
        
        navigationBar={
                <Navigator.NavigationBar
                    routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                    { return (<Text>Backbutton</Text>); },
                RightButton: (route, navigator, index, navState) =>
                    { return (<Text>Homebutton</Text>); },
                Title: (route, navigator, index, navState) =>
                    { return (<Text>Nextbutton</Text>); },
                    }}
                style={{backgroundColor: 'gray'}}
                />
             }




            
            </View>
        )};
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
     },
     
    })