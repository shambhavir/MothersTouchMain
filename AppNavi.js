import React, {Component} from 'react';
import { LoginScreen, HomeScreen, RegistrationScreen, Page1} from './src/screens'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './src/firebase/config'
// import Splash from './src/screens/splash';

const Stack = createStackNavigator();
export default class AppNavi extends Component {

    constructor(props){
      super(props);
      this.state = {
        loggedIn : null,
      }
    }
  
    componentDidMount(){
      this.authListner();
    }
  
    componentWillUnmount(){
      // unsubscribe
      this.setState({
        loggedIn:null,
      })
    }
  
    authListner(){
      fire.auth().onAuthStateChanged(user => {
        //console.log(user)
        if (!user){
          this.setState({
            loggedIn:false,
          })
        } else if (user){
          this.setState({
            loggedIn:true,
          }) 
        }    
      }
      )
    }
  
    render = () => {
      if (this.state.loggedIn == null) {
        // We haven't finished checking for the token yet
        // return <Splash />;
        console.log('hi')
      }
  
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              {
                this.state.loggedIn == false ? (
                  <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
  
                  </>
                ) : 
                  <>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                    <Stack.Screen name = "MoreInfo" component={MoreInfo}/>
                    {/* <Stack.Screen name = "Page1" component={Page1}/> */}

                  </>
             }
  
            </Stack.Navigator>
          </NavigationContainer>
        )
  }}
