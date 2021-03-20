import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, MoreInfo, Page1 } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config'


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [loggedin, setLoggedIn] = useState(false)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setUser(userData)
            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
    //return firebase.auth().onAuthStateChanged(setLoggedIn);
  }, []);

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user}/>}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name = "MoreInfo" component = {MoreInfo}/>
        {/* <Stack.Screen name = "Page1" component = {Page1}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
