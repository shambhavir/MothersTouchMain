import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import CardFlip from 'react-native-card-flip';


import styles from './styles';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
            card: ''
        };
    }
    componentDidMount() {
        this.state.beer.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        this.state.beer.push("this is a testing2")
        this.state.beer.push("this is a testing3")
        this.state.beer.push("this is a testing4")
        this.state.beer.push("this is a testing5")

        console.log(this.state.beer);
    }


    updateInfo = () => {


    }
    render() {
        console.log("came here")

        return (
            <View style={styles.container}>
            <Card style={{padding: 10, margin: 10}}>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </Card>
            <Card style={{padding: 10, margin: 10}}>
              <Button
                onPress={()=>{}}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </Card>
            <Card style={{padding: 10, margin: 10, height: 50}}>
            </Card>
          </View>
        )
        
    }
}