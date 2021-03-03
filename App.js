import 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config'


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // if (loading) {
  //   return (
  //     <></>
  //   )
  // }

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
  }, []);

  return (
    // original tutorial code
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     { user ? (
    //         <Stack.Screen name="Home">
    //           {props => <HomeScreen {...props} extraData={user} />}
    //         </Stack.Screen>
    //     ) : (
    //       <>
    //         <Stack.Screen name="Login" component={LoginScreen} />
    //         <Stack.Screen name="Registration" component={RegistrationScreen} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user}/>}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       loggedIn : null,
//     }
//   }

//   componentDidMount(){
//     this.authListner();
//   }

//   componentWillUnmount(){
//     // unsubscribe
//     this.setState({
//       loggedIn:null,
//     })
//   }

//   authListner(){
//     firebase.auth().onAuthStateChanged(user => {
//       //console.log(user)
//       if (!user){
//         this.setState({
//           loggedIn:false,
//         })
//       } else if (user){
//         this.setState({
//           loggedIn:true,
//         }) 
//       }    
//     }
//     )
//   }

//   render = () => {
//     if (this.state.loggedIn == null) {
//       // We haven't finished checking for the token yet
//       // return <Splash />;
//       console.log('hi')
//     }
    

//       return (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login">
//             {
//               this.state.loggedIn == true ? (
//                 <>
//                   <Stack.Screen name="Login" component={LoginScreen} />
//                   <Stack.Screen name="Registration" component={RegistrationScreen} />

//                 </>
//               ) : 
//                 <>
//                   <Stack.Screen name="Home" component={HomeScreen}/>
//                 </>
              
        
//               }
      
//           </Stack.Navigator>
//         </NavigationContainer>
//       )

  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState(null)
  
  //return (

    
  //   <NavigationContainer>
  //  <Stack.Navigator>
  //       { user ? (
  //         <Stack.Screen name="Home">
  //           {props => <HomeScreen {...props} extraData={user} />}
  //         </Stack.Screen>
  //       ) : (
  //         <>
  //           <Stack.Screen name="Login" component={LoginScreen} />
  //           <Stack.Screen name="Registration" component={RegistrationScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
 // );






// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

