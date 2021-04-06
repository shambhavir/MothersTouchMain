import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import CardFlip from 'react-native-card-flip';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const user = firebase.auth().currentUser;
import styles from './styles';

export default class DashBoard extends React.Component {
    static navigationOptions = {
        // Sets the title of the Header
        title: 'Home',
    };
    constructor(props) {
        super(props);
        this.state =
        {
            beer: [],
            card: ''
        };
    }

    componentDidMount() {
        this.state.beer.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
        this.state.beer.push("this is a testing2")
        this.state.beer.push("this is a testing3")
        this.state.beer.push("this is a testing4")
        this.state.beer.push("this is a testing5")

        console.log(this.state.beer[0]);
    }




    render() {
        console.log("came here")

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>

                        <Text>Nutrition</Text>

                        <Button
                            onPress={() => { this.props.navigation.navigate('Resource1') }}
                            title="test"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
                        <Text>Sleep</Text>

                        <Button
                            onPress={() => { this.props.navigation.navigate('Resource1') }}
                            title="test"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
                        <Text>info part3</Text>

                        <Button
                            onPress={() => { this.props.navigation.navigate('Resource1') }}
                            title="test"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
                        <Text>info part4</Text>

                        <Button
                            onPress={() => { this.props.navigation.navigate('Resource1') }}
                            title="test"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }}>
                        <Text>info part4</Text>

                        <Button
                            onPress={() => { this.props.navigation.navigate('Resource1') }}
                            title="test"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                </ScrollView>
            </View>
        )

    }
}