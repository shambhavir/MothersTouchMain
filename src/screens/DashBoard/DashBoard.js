import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Modal, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Card from './Card';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { FAB } from 'react-native-paper';

const user = firebase.auth().currentUser;


export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            bp: '',
            ag: '',
            mp: '',
            intVal: [],
            dash: '',
            data1: [],
            test: '',
            test2: '',
            isVisible: false
        };
    }
    componentDidMount() {
        //console.log(data1);
        const keys = []

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();



        /*need to fix re rendering too many times
        and also that 100 is being added to the array again and again
        play around with it, this will fix the issue
        */
        bpRef.once('value').then(snapshot => {
            snapshot.forEach(item => {
                const userObj = snapshot.val();
                var temp = item.val().bpMeasure;
                //console.log(temp)
                ////this.data1.push(item.val().bpMeasure)
                this.setState(
                    {
                        test: temp
                    }
                )


                this.setState(prevState => ({ //works?!
                    data1: [...prevState.data1, temp]
                }))
                return false;
            });

        });
    }
    displayModal(show) {
        this.setState({ isVisible: show })
    }

    updateInfo = () => {
        const keys = []

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();

        bpRef.push({
            bpMeasure: this.state.bp,
            date: Date.now(),
        })

    }

    render() {
        console.log(this.state.data1)

        return (
            <View style={styles.MainContainer}>
                <FAB
                    style={styles.fab}
                    large
                    icon="plus"
                    onPress={() => {
                        this.displayModal(true);
                    }}
                />

                <Modal
                    animationType={"slide"}
                    transparent
                    visible={this.state.isVisible}
                    presentationStyle="overFullScreen"
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            backgroundColor: "#fff",
                            width: 300,
                            height: 300,
                        }}>
                            <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
                                {/* <Text style={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas eget tempus augue, a convallis velit.</Text> */}
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#aaaaaa"
                                    secureTextEntry
                                    placeholder='Blood Pressure'
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                    multiline
                                    onChangeText={(bp) => this.setState({ bp })}
                                    value={`${this.state.bp}`}
                                />
                                <Button
                                    title="Submit"
                                    onPress={this.updateInfo} />
                            </KeyboardAwareScrollView >
                        </View>
                    </View>


                </Modal>

                <View style={styles.innerContainer}>

                    <Text style={styles.TextStyle}>Your Blood Pressure Records</Text>
                    {this.state.data1.map((d, i) => (
                        <Card key={i}>
                            <Text key={i} style={styles.TextStyle}>{d}</Text>
                        </Card>
                    ))}

                </View>



            </View>


        )
    }

}



 //const one = bpRef.child; 

       // console.log(bpRef.child)

        // bpRef.push({
        //     bpMeasure: this.state.bp,
        //     date: Date.now(),
        // }).then({  })

    // console.log(this.state.test)
                // console.log("\n")
                //console.log(this.state.data1)
                //console.log(this.state.test)
                 //console.log(Object.values(userObj)) 
                 //console.log(userObj)

                // console.log(data1)
                 //console.log(this.state.test2)
                // this.setState
                // ({  
                //     bp1: item.val().bpMeasure, 
                // })
               /// this.setState({ data1: Object.values(temp)})
              //  var newStateArray = this.state.data1.slice(); 
              //  newStateArray.push(Object.values(temp));