//mport { Text, View } from 'react-native'
import React, { useRef, useEffect } from "react";
import { Animated, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { TabView, SceneMap } from 'react-native-tab-view';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
// const ref = firestore().collection('users');

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


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
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    //[styles.red, styles.big]
    <View style={styles.container}>

       {/* <FadeInView style={{width: 300, height: 200}}>
       <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 45, fontFamily: "System"
       }}>nothing</Text>
    
       {/* <Text style={{
        color: "black", fontWeight: 'bold', fontSize: 45, fontFamily: "System"
      }}>Mother's Touch <Text>® </Text></Text> */}
      
      {/* </FadeInView> */}
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
       
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


   
    </View>
  );

}
