import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


import { firebase, firebaseConfig, db } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";


export default function MoreInfo({ navigation }) {
    const [bp, setBP] = useState(0)
    const [age, setAge] = useState(0)
    const [monthsPreg, setMP] = useState(0)

    //to properly save data 
    const user = firebase.auth().currentUser;



    const onSubmitPress = () => {
        db.collection("users").doc(user.uid).update(
            {
                hasOptedIn: true
            }
        )
        navigation.navigate('Home', { user })

    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />

                {<TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Blood Pressure'
                    onChangeText={
                        (text) => {
                            const userRef = db.collection("users").doc(user.uid).update(
                                {
                                    bloodPresure: text
                                }
                            )
                                // .then(function () {
                                //     console.log("Document successfully updated!");
                                // });

                        }}
                    value={bp}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />}
                {<TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Months Pregnant'
                    onChangeText={
                        (text) => {
                            const userRef = db.collection("users").doc(user.uid).update(
                                {
                                    monthsPreg: text
                                }
                            )
                                // .then(function () {
                                //     console.log("Document successfully updated 2!");
                                // });

                        }}
                    value={monthsPreg}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />}
                {<TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Age'
                    onChangeText={
                        (text) => {
                            const userRef = db.collection("users").doc(user.uid).update(
                                {
                                    age: text
                                }
                            )
                                // .then(function () {
                                //     console.log("Document successfully updated 3!");
                                // });

                        }}
                    value={age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSubmitPress()}>
                    <Text style={styles.buttonTitle}>Submit Data</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
