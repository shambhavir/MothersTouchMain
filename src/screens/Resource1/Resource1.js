import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { Card } from 'react-native-shadow-cards';

const user = firebase.auth().currentUser;
import styles from './styles';

export default class Resource1 extends React.Component {

    updateInfo1 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Favorites")
        const path = favRef.toString();

        favRef.push({
            testpush: "data1"
        })


    }
    updateInfo2 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Favorites")
        const path = favRef.toString();

        favRef.push({
            testpush: "data2"
        })
    }
    updateInfo3 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Favorites")
        const path = favRef.toString();

        favRef.push({
            testpush: "data3"
        })
    }
    updateInfo4 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Favorites")
        const path = favRef.toString();

        favRef.push({
            testpush: "data4"
        })
    }
    updateInfo5 = () => {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const favRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Favorites")
        const path = favRef.toString();

        favRef.push({
            testpush: "data5"
        })
    }
    render() {
        return (
            <View style={styles.container}>
                 <ScrollView>
                <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300 }}>
               
                    <Text>Nutrition</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    

                    <Button
                        onPress={this.updateInfo1}
                        title="⭐️"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                   
                </Card>
                <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300  }}>
                    <Text>Sleep</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Button
                        onPress={this.updateInfo2}
                        title="⭐️"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </Card>
                <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300  }}>
                    <Text>info part3</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Button
                        onPress={this.updateInfo3}
                        title="⭐️"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </Card>
                <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300 }}>
                    <Text>info part4</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Button
                        onPress={this.updateInfo4}
                        title="⭐️"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </Card>
                <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 300 }}>
                    <Text>info part4</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Button
                        onPress={this.updateInfo5}
                        title="⭐️"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </Card>
                </ScrollView>
            </View>
        )

    }
}