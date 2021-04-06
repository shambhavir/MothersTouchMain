//import React from 'react'
//mport { Text, View } from 'react-native'
import * as React from 'react';
import { Button, View, Text, ScrollView  } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'left', marginVertical: 0, marginHorizontal: 0, backgroundColor: '#ffe9f2' }}>
      <Text>Hello! Please select the option that {'\n'}         best fits your situation. {'\n'} </Text>
      <ScrollView>
      <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120}}>
        <Button
          onPress={() => navigation.navigate('InfoScreen1')}
          title="Resource 1"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
      <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
       
       <Button
         color="#a52a49"
         title="Resource 2"
         onPress={() => navigation.navigate('InfoScreen1')}
       />
       </Card>
    
      <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120}}>
        <Button
          onPress={() => navigation.navigate('DashBoard')}
          title="Resource 3"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
      <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120}}>
        <Button
          onPress={() => navigation.navigate('DashBoard')}
          title="DashBoard"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
      
     

      {/* <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
        <Button
          color="#a52a49"
          title="Covid-19"
          onPress={() => navigation.navigate('Covid-19')}
        />
      </Card>
     

      <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
      <Button
        color="#a52a49"
        title="Vaccine Info"
        onPress={() => navigation.navigate('Vaccine')}
      />
      </Card>
       */}
      {/* <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
      <Button
        color="#a52a49"
        title="Maternal"
        onPress={() => navigation.navigate('Maternal')}
      />
      </Card> */}
     
      {/* <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
      <Button
        color="#a52a49"
        title="Other Info"
        onPress={() => navigation.navigate('Other Info')}
      />
      </Card>
     
      
      <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
      <Button
        color="#a52a49"
        title="FAQ"
        onPress={() => navigation.navigate('FAQ')}
      />
      </Card>
     
      <Card style={{ padding: 10, margin: 10, borderRadius: 20 }}>
      <Button
        color="#a52a49"
        title="Our Team"
        onPress={() => navigation.navigate('Our Team')}
      />
      </Card> */}
      
     
     
      
    
      </ScrollView>
    </View>
  );

}
