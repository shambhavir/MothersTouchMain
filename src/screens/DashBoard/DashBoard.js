import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Modal, Button, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Card from './Card';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { FAB, Portal } from 'react-native-paper';

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
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();
        bpRef.once('value').then(snapshot => {
            snapshot.forEach(item => {
                const userObj = snapshot.val();
                var temp = item.val().bpMeasure;

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
            <Portal.Host>
                <View style={styles.MainContainer}>



                    <ScrollView>
                        <Modal
                            animationType={"slide"}
                            transparent
                            visible={this.state.isVisible}
                            presentationStyle="overFullScreen"

                        >

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
                                        {/* <Button
                                            title="Submit"
                                            onPress={this.updateInfo} /> */}
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={this.updateInfo}
                                        >
                                            <Text style={styles.buttonTitle}>Submit Data</Text>
                                        </TouchableOpacity>

                                    </KeyboardAwareScrollView >
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.container}
                                activeOpacity={1}
                                onPressOut={() => { this.setState({ isVisible: false }) }}
                            ></TouchableOpacity>

                        </Modal>
                        <View style={styles.innerContainer}>
                            <Text style={styles.TextStyle}>Your Blood Pressure Records</Text>

                            {this.state.data1.map((d, i) => (
                                <Card key={i}>
                                    <Text key={i} style={styles.TextStyle}>{d}</Text>
                                </Card>
                            ))}
                        </View>

                    </ScrollView>
                    <FAB
                        style={styles.fab}
                        large
                        icon="plus"
                        onPress={() => {
                            this.displayModal(true);
                        }}
                    />
                </View>
            </Portal.Host>
        )
    }
}