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
var data1 = [];

export default class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
          
            data1: [],
            test: ''
        };
    }
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


    render() {
        console.log("came here")

        return (
            <View style={styles.container}>

             <View style={styles.innerContainer}>
             <Text style={styles.TextStyle}>Your Favorites</Text>

             {this.state.data1.map((d, i) => (
                 <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120 }} key={i}>
                     <Text key={i} style={styles.TextStyle}>{d}</Text>
                 </Card>
             ))}
         </View>
         </View>
        )

    }
}