import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
// import { Checkbox } from 'react-native-paper'
import {CheckBox} from 'react-native-elements';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


import AsyncStorage from '@react-native-community/async-storage';

//need to add forgot password, or reset password
//user settings page 
export default function RegistrationScreen({ navigation }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [enteredData, setEnteredData] = useState('')
    const [hasOptedIn, setInfo] = useState(false)
    const [covid] = useState(false)
    const [nutrition] = useState(false)
    const [mentalHealth] = useState(false)
    const [exercise] = useState(false)
    const [userType] = useState('')
    
    // const [isSelected, setSelection] = React.useState(false);

    const [checked, setChecked] = useState(false);

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    checked,
                    enteredData,
                    covid, 
                    nutrition,
                    mentalHealth,
                    exercise,
                    userType
                  
                    
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    //.add(info)
                    .then(() => {
                        
                        navigation.navigate('Login', {user:data})
                        //navigation.navigate('Home', { user: data })
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
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
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Text>Share Data? </Text> */}
                    <CheckBox
                      //  status={checked}
                      title = "Share Data?"
                      checked = {checked}
                      onPress={() => setChecked(!checked)}
                        //status={checked ? 'checked' : 'unchecked'}
                        // onPress={() => {
                        //     setChecked(!checked);
                        // }}
                    />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}