//mport { Text, View } from 'react-native'
import React, { useRef, useEffect, useState } from "react";
import { Animated, View, Text, ScrollView, useWindowDimensions, StyleSheet, Dimensions  } from 'react-native';
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

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);



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
   ]
   };
   _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    });
    onpress4 = () => {
    
          firebase.auth().onAuthStateChanged(function (user) {
              const currentUser = user;
              console.log(db.collection("users").doc(currentUser.uid).get(covid));
          });
  }
    
    // _renderIcon = ({ route }) => {
    // return (
    //   <Icon name={route.icon} size={24} color='black' />
    // );
    // };

  render() {
    return (
      
      <TabView
    navigationState={this.state}
    renderScene={this._renderScene}
    onIndexChange={index => this.setState({ index })}
    initialLayout={{ width: Dimensions.get('window').width }}
    onpress4
    render
    lazy={true}
    scrollEnabled={true}
    bounces={true}
  />
    );
  }


}