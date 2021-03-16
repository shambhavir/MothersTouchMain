import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


import { firebase, firebaseConfig, db } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
const user = firebase.auth().currentUser;
//const {navigate} = this.props.navigation;

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            modalVisible: false,
            bp: '',
            ag: '',
            mp: ''
        };
    }
    componentDidMount() {

        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                bloodPressure: this.state.bp
            }),
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
    updateInfo = () => {
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                bloodPressure: this.state.bp,
            }
        ),
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
    // updateState({navigation}) 
    // { // call this onClick to trigger the update
    //     // if (somecondition) {
    //     //   // doing some redux store update
    //     //   this.props.reloadApp();
    //     // }
    //     this.props.navigation.navigate('Home', { user })

    // }

    render() {

        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always">
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
                        keyboardType="numeric"
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
                        keyboardType="numeric"
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
                        keyboardType="numeric"
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
