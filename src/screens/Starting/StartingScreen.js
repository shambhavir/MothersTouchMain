import React, { useRef, useEffect } from "react";
import { Animated, View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';



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
      <View style={styles.container}>
         <FadeInView style={{width: 300, height: 200}}>
         <Text style={{
          color: "black", fontWeight: 'bold', fontSize: 45, fontFamily: "System"
        }}>Welcome to Mother's Touch! 
        </Text>
    <Text>{'\n'}</Text>
    <Text>
        Let's get started!
    </Text>
        </FadeInView>
  
        <View style={styles.container}>
  
            <View style={styles.sideContainer}>
              <Button
                onPress={() => navigation.navigate('InterestForm1')}
                color="white"
                mode="contained"
                style={{
                  borderRadius: 20, width: 300, height: 140, shadowColor: 'black',
                  shadowOpacity: 0.9, elevation: 5, backgroundColor: '#8fbc8f'
                }}
              >
                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                
                  <Text style={{
                    color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                  }}>New Mom</Text>
                </View>
              </Button>
              <Text>{'\n'}    </Text>
  
              <Button
               onPress={() => navigation.navigate('DashBoard')}
                color="white"
                mode="contained"
                style={{
                  borderRadius: 20, width: 300, height: 140, shadowColor: 'black',
                  shadowOpacity: 0.9, elevation: 5, backgroundColor: '#fafad2'
                }}
              >
                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                  <Text style={{
                    color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500'
                  }}>Expecting Mom</Text>
                </View>
              </Button>
  
            </View>
            <Text>{'\n'}    </Text>
  
            <View style={{ flex: 1, justifyContent: "left" }}>
              <Button
                onPress={() => navigation.navigate('InfoScreen1')}
                color="white"
                mode="contained"
                style={{
                  borderRadius: 20, width: 300, height: 140, shadowColor: 'black',
                  shadowOpacity: 0.9, elevation: 5, backgroundColor: '#ffb6c1'
                }}
              >
                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                  <Text style={{
                    color: "black", fontFamily: "System",  fontSize: 20, fontWeight: '500'
                  }}>Here to Learn</Text>
                </View>
              </Button>
            </View>
        </View>
      </View>
    );
  
  }
  