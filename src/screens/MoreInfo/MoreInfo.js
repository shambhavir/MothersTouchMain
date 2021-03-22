import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const user = firebase.auth().currentUser;

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            bp: '',
            ag: '',
            mp: ''
        };
    }


    componentDidMount() 
    {

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();
        //console.log(path);
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                age: this.state.ag
            }
        ),
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                    monthsPreg: this.state.mp
            });
    }
    updateInfo = () => 
    {
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();
        //console.log(path);
        bpRef.push({
            bpMeasure: this.state.bp,
            date: Date.now(),
        })
        bpRef.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childData);
            });
        });
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                age: this.state.ag
            }
        ),
            db.collection("users").doc(firebase.auth().currentUser.uid).update(
                {
                    monthsPreg: this.state.mp
                }
            );
    }
    onPress = () => {
        // navigation.navigate('Home', { user })
    }
    onFooterLinkPress = () => {
        this.props.navigation.navigate('Home', { user })
    }


    render() {
        //                <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="handled"
                    onPress={KeyboardAwareScrollView.dismiss}
                    accessible={false}
                >
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/icon.png')}
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Months Pregnant'
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        multiline
                        onChangeText={(mp) => this.setState({ mp })}
                        value={`${this.state.mp}`}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Age'
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        multiline
                        onChangeText={(ag) => this.setState({ ag })}
                        value={`${this.state.ag}`}
                    />
                    <View style={styles.innerContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress=
                            {
                                this.updateInfo
                            }
                        >
                            <Text style={styles.buttonTitle}>Submit Data</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerView}>
                        <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Home</Text>
                    </View>
                    {/* <View style={styles.innerContainer}>
                        <TouchableOpacity
                                style={styles.button}
                                onPress=
                                {
                                    // this.updateInfo
                                    //this.props.updateState
                                    this.updateState
                                }
                            >
                                <Text style={styles.buttonTitle}>Home</Text>
                            </TouchableOpacity>
                        </View> */}
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
