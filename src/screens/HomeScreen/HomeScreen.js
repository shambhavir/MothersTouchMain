//mport { Text, View } from 'react-native'
import React, { useRef, useEffect, useState } from "react";
import { Animated, View, Text, ScrollView, useWindowDimensions, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { TabViewAnimated, TabBar, SceneMap, TabView } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

var data1 = [];
var infostorage = [];
// data1[0] = "this is some data 1"
// data1[1] = "this is some data 2"
// data1[2] = "this is some data 3"


export default class HomeScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'For You',

      },
      {
        key: 'second',
        title: 'Explore',
      }
    ],
    data1: [],
    test: '',
    check1: false,

    check2: false,

    check3: false,

    check4: false,

    opacityTest: 0.1,
    buttonColor1: '#8fbc8f',
    buttonColor2: '#8fbc8f',
    buttonColor3: '#8fbc8f',
    buttonColor4: '#8fbc8f',
  };

  componentDidMount() {
    const keys = []
    const userRef = firebase.database().ref("users");
    const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
    const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "FavoritesResource1")
    const path = favRef.toString();
    favRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        const userObj = snapshot.val();
        const temp = item.val().testpush;
        console.log(temp)
        this.setState(
          {
            test: temp
          }
        )
        this.setState(prevState => ({ //works?!
          data1: [...prevState.data1, temp]
        }))
        return false;
      });
    });
  }

  onpress1 = () => {
    if (!this.state.check1) {
      this.setState({
        // opacity1: 1,
        check1: true,
        buttonColor1: '#67C495',
       

      })

      this.componentDidMount

    }
    else {
      this.setState
        ({
          check1: false,
          buttonColor1: '#8fbc8f'
        })

    }
  }
  onpress2 = () => {
    if (!this.state.check2) {
      this.setState({
        check2: true,
        buttonColor2: '#67C495'
      })
     this.componentDidMount

    } else {
      this.setState({
        check2: false,
        buttonColor2: '#8fbc8f'
      })

    }

  }

  render() {

    return (
      <View style={styles.container}>


        <View style={styles.innerContainer}>
          <View style={{ flexDirection: "row" }} >

            <View style={styles.sideContainer}>

              <Button
                onPress={() => this.onpress1()}
                color={this.state.buttonColor1}
                mode="contained"
                style={{
                  borderRadius: 20, width: 160, height: 60, shadowColor: 'black',
                  shadowOpacity: 0.9, elevation: 5,
                  backgroundColor: this.state.buttonColor1
                }}
              >


               <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}> 
                  <Text style={{
                    color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                  }}>For You</Text> 
               
                </View>
                
                </Button>
             
             
                {/* <View style={styles.sideContainer}>
                {this.state.data1.map((d, i) => (
                 <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }} key={i}>
                     <Text key={i} style={styles.TextStyle}>{d}</Text>
                 </Card>
             ))}
                  </View> */}

            </View>
            <Text>{'\n'}    </Text>

            <Text>{'\n'}    </Text>

            <Button
              onPress={() => this.onpress2()}
              color={this.state.buttonColor2}
              mode="contained"
              style={{
                borderRadius: 20, width: 160, height: 60, shadowColor: 'black',
                shadowOpacity: 0.9, elevation: 5,
                backgroundColor: this.state.buttonColor2
              }}
            >

              <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                <Text style={{
                  color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                }}>Explore</Text>

              </View>
            </Button>

          </View>


        </View>
        {this.state.check1 && this.state.data1.map((d, i) => (
                 <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300 }}key={i}>
                     <Text key={i} style={styles.TextStyle}>{d}</Text>
                 </Card>
             ))}
      </View>




    );
  }


}

/*
 style={ {marginLeft: 30,
                      marginRight: 30,
                      marginTop: 20,
                      height: 48,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: 'center',
                          borderRadius: 20, width: 160, height: 100, shadowColor: 'black',
                          shadowOpacity: 0.9, elevation: 5,
                          backgroundColor: this.state.buttonColor1}}


*/

// <TabView
      //   navigationState={this.state}
      //   // renderScene={this._renderScene}
      //   onIndexChange={index => this.setState({ index })}
      //   initialLayout={{ width: Dimensions.get('window').width }}
      //   onpress4
      //   render
      //   lazy={true}
      //   scrollEnabled={true}
      //   bounces={true}
      //   renderScene={this._renderScene.bind(this)}

      // >
      //   </TabView>
