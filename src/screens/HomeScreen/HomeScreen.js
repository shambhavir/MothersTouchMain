//import React from 'react'
//mport { Text, View } from 'react-native'
import React, { useRef, useEffect } from "react";
import { Animated, View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
// const ref = firestore().collection('users');

  
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function HomeScreen({ navigation }) {
 
  return (
    //[styles.red, styles.big]
    <View style={styles.container}>
       <FadeInView style={{width: 300, height: 200}}>
       <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 45, fontFamily: "System"
       }}>nothing</Text>
    
       {/* <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 45, fontFamily: "System"
      }}>Mother's Touch <Text>® </Text></Text> */}
      
      </FadeInView>
       
 
      {/* <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 50, fontFamily: "System"
      }}>Welcome to</Text>
    
       <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 50, fontFamily: "System"
      }}>Mother's Touch <Text>® </Text></Text>
       */}
      <Text>{'\n'}    </Text>

      <View style={styles.innerContainer}>
        <View style={{ flexDirection: "row" }} >

          <View style={styles.sideContainer}>
            <Button
              onPress={() => navigation.navigate('InfoScreen1')}
              color="white"
              mode="contained"
              style={{
                borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                shadowOpacity: 0.9, elevation: 5, backgroundColor: '#8fbc8f'
              }}
            >
              <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                {/* <Text style={{
                  justifyContent: "center", color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                }}>💉</Text> */}
                <Text style={{
                  color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                }}>Resource 1</Text>
              </View>
            </Button>
            <Text>{'\n'}    </Text>

            <Button
             onPress={() => navigation.navigate('DashBoard')}
              color="white"
              mode="contained"
              style={{
                borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                shadowOpacity: 0.9, elevation: 5, backgroundColor: '#fafad2'
              }}
            >
              <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                <Text style={{
                  color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                }}>Resource 2</Text>
              </View>
            </Button>

          </View>
          <Text>{'\n'}    </Text>
          <Text>{'\n'}    </Text>

          <View style={{ flex: 1, justifyContent: "left" }}>
            <Button
              onPress={() => navigation.navigate('InfoScreen1')}
              color="white"
              mode="contained"
              style={{
                borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                shadowOpacity: 0.9, elevation: 5, backgroundColor: '#ffb6c1'
              }}
            >
              <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                <Text style={{
                  color: "black", fontFamily: "System",  fontSize: 20, fontWeight: '500'
                }}>Blood 🩸Pressure Dashboard</Text>
              </View>
            </Button>
            <Text>{'\n'}    </Text>

            <Button
             onPress={() => navigation.navigate('Favorites')}
              color="white"
              mode="contained"
              //icon="settings-box"
              style={{
                borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                shadowOpacity: 0.9, elevation: 5, backgroundColor: '#8fbc8f'
              }}
            >
              <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                <Text style={{
                  color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                }}>Settings ⚙️</Text>
              </View>
            </Button>
          </View>





        </View>
        <Text>{'\n'}    </Text>



      </View>


      <ScrollView>

        {/* <View style={{ textAlign: 'center', position: 'absolute',
              top: 40,
              left: 120, fontFamily: "Cochin"}}>
        <Button 
          onPress={() => navigation.navigate('InfoScreen1')}
          color="white"
          mode="contained"
        >

<Text style={{color:"black", fontFamily:"System"}}>press me</Text>
        </Button>
        </View>
        <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120,backgroundColor:'#8fbc8f',  shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 56}}>
        <View style={{ textAlign: 'center', position: 'absolute',
              top: 40,
              left: 120, fontFamily: "Cochin"}}>
        <Button 
          onPress={() => navigation.navigate('InfoScreen1')}
          color="white"
          mode="contained"
        >

<Text style={{color:"black", fontFamily:"System"}}>press me</Text>
        </Button>
        </View>
        </Card>
        <Text>{'\n'}    </Text>
        <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120, backgroundColor:'#8fbc8f' }}>
          <View style={{ textAlign: 'center', position: 'absolute',
              top: 40,
              left: 65}}>
          <Button
           
            onPress={() => navigation.navigate('DashBoard')}
            title="Blood Pressure Dashboard"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          </View>
        </Card>
        <Text>{'\n'}    </Text>
        <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120, backgroundColor:'#8fbc8f'  }}>
        <View style={{ textAlign: 'center', position: 'absolute',
              top: 40,
              left: 145}}>
          <Button
            onPress={() => navigation.navigate('Favorites')}
            title="Favorites"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          </View>
        </Card>
        <Text>{'\n'}    </Text>
        <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120, backgroundColor:'#8fbc8f'  }}>
        <View style={{ textAlign: 'center', position: 'absolute',
              top: 40,
              left: 145}}>
          <Button
            color="white"
            title="Settings"
            onPress={() => navigation.navigate('InfoScreen1')}
          />
          </View>
        </Card> */}
        <Text>{'\n'}    </Text>
      </ScrollView>
    </View>
  );

}
