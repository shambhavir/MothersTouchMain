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
var data1 = [];


export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            bp: '',
            ag: '',
            mp: '',
            intVal: [],
            dash: ''
        };
    }
    componentDidMount() {
        //console.log(data1);
        const keys = []

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();

        bpRef.push({
            bpMeasure: this.state.bp,
            date: Date.now(),
        })


        bpRef.once('value').then(snapshot => {
            snapshot.forEach(item => {
                var temp = { bp1: item.val().bpMeasure };

                data1.push(Object.values(temp));
                this.setState({ data1 })
                //this.dash = temp; 
                this.setState({ dash: Object.values(temp) });

                this.setState({ intVal: Object.values(temp) })

                return false;
            });

        });
        // DashBoard.navigationOptions = {
        //     headerTitle: 'Dash Board',
        //     headerLeft: null,
        // }; 
    
    }
    render() {
        const { items, isLoading } = this.state;
        return (
            <View style={styles.MainContainer}>
                <View style={styles.innerContainer}>
                    {data1.map((d, i) => (
                        <Text key={i} style={styles.TextStyle}>{d}</Text>
                    ))}
                </View>
            </View>

        )
    }
    
}
