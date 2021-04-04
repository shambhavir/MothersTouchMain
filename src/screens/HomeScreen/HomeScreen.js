//import React from 'react'
//mport { Text, View } from 'react-native'
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'left', marginVertical: 0,  marginHorizontal: 0, backgroundColor: '#ffe9f2'}}>
        <Text>Hello! Please select the option that {'\n'}         best fits your situation. {'\n'} </Text>
        <Button
          color="#a52a49"
          title="Covid-19"
          onPress={() => navigation.navigate('Covid-19')}
        />
        <Button
          color="#a52a49"
          title="Vaccine Info"
          onPress={() => navigation.navigate('Vaccine')}
        />
        <Button
          color="#a52a49"
          title="Maternal"
          onPress={() => navigation.navigate('Maternal')}
        />
        <Button
          color="#a52a49"
          title="Other Info"
          onPress={() => navigation.navigate('Other Info')}
        />
        <Button
          color="#a52a49"
          title="FAQ"
          onPress={() => navigation.navigate('FAQ')}
        />
        <Button
          color="#a52a49"
          title="Our Team"
          onPress={() => navigation.navigate('Our Team')}
        />
          <Button
          color="#a52a49"
          title="InfoScreen1"
          onPress={() => navigation.navigate('InfoScreen1')}
        />
  
      </View>
    );
    
}
{/*function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'left', marginVertical: 0,  marginHorizontal: 0, backgroundColor: '#ffe9f2'}}>
        <Text>Hello! Please select the option that {'\n'}         best fits your situation. {'\n'} </Text>
        <Button
          color="#a52a49"
          title="Covid-19"
          onPress={() => navigation.navigate('Covid-19')}
        />
        <Button
          color="#a52a49"
          title="Vaccine Info"
          onPress={() => navigation.navigate('Vaccine')}
        />
        <Button
          color="#a52a49"
          title="Maternal"
          onPress={() => navigation.navigate('Maternal')}
        />
        <Button
          color="#a52a49"
          title="Other Info"
          onPress={() => navigation.navigate('Other Info')}
        />
        <Button
          color="#a52a49"
          title="FAQ"
          onPress={() => navigation.navigate('FAQ')}
        />
        <Button
          color="#a52a49"
          title="Our Team"
          onPress={() => navigation.navigate('Our Team')}
        />
  
      </View>
    );
    
  }*/}
  

