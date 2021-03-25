import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DashBoard, MoreInfo, LoginScreen, HomeScreen, RegistrationScreen, CovidScreen, VaccineScreen, MaternalScreen, OtherInfoScreen, FAQScreen, OurTeamScreen, LoadingScreen} from './src/screens'
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
    const usersRef =  firebase.firestore().collection('users')
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
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
        {/* <Stack.Screen name="Dashboard">
          {props => <DashBoard {...props}/>}
        </Stack.Screen> */}
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Covid-19" component={CovidScreen} />
        <Stack.Screen name="Vaccine" component={VaccineScreen} />
        <Stack.Screen name="Maternal" component={MaternalScreen} />
        <Stack.Screen name="Other Info" component={OtherInfoScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="Our Team" component={OurTeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
