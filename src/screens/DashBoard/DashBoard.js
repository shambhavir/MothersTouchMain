import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Card from './Card';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
const user = firebase.auth().currentUser;
var data1 = [];


export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            bp: '',
            ag: '',
            mp: '',
            intVal: [],
            dash: '',
            data1: [],
            test: '',
            test2: ''
        };
    }
    componentDidMount() {
        //console.log(data1);
        const keys = []

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();



        /*need to fix re rendering too many times
        and also that 100 is being added to the array again and again
        play around with it, this will fix the issue
        */
        bpRef.once('value').then(snapshot => {
            snapshot.forEach(item => {
                const userObj = snapshot.val();
                var temp = item.val().bpMeasure;
                //console.log(temp)
                ////this.data1.push(item.val().bpMeasure)
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
        console.log(this.state.data1)
        // var keys = 0; 
        // const componentsToRender = "test"
        // for(; keys < this.state.data1.length; keys++)
        // {
        //     componentsToRender = keys.map(key => this.state.data1[key]);
        // }
        return (
            <View style={styles.MainContainer}>
                <View style={styles.innerContainer}>
                    {/* <Text>{this.state.test2}</Text> */}
                    <Text style={styles.TextStyle}>Your Blood Pressure Records</Text>
                    {/* {this.state.data1.map((d, i) => (
                        <Text key={i} style={styles.TextStyle}>{d}</Text>
                    ))} */}

                    {this.state.data1.map((d, i) => (
                        <Card key = {i}>
                            {/* {this.state.data1.map((d2, j) =>  */}
                        <Text key={i} style={styles.TextStyle}>{d}</Text>
                        {/* )} */}
                        </Card>
                    ))}
                    {/* <Card>
                        <Text style={styles.TextStyle}>
                            {"title"}
                        </Text>
                        {this.state.data1.map((d, i) => (
                            <Text key={i} style={styles.TextStyle}>{d}</Text>
                        ))}
                    </Card> */}
                    {/* {componentsToRender.map((Card, key) => (<Card key={key}/>))} */}
                </View>



            </View>


        )
    }

}



 //const one = bpRef.child; 

       // console.log(bpRef.child)

        // bpRef.push({
        //     bpMeasure: this.state.bp,
        //     date: Date.now(),
        // }).then({  })

    // console.log(this.state.test)
                // console.log("\n")
                //console.log(this.state.data1)
                //console.log(this.state.test)
                 //console.log(Object.values(userObj)) 
                 //console.log(userObj)

                // console.log(data1)
                 //console.log(this.state.test2)
                // this.setState
                // ({  
                //     bp1: item.val().bpMeasure, 
                // })
               /// this.setState({ data1: Object.values(temp)})
              //  var newStateArray = this.state.data1.slice(); 
              //  newStateArray.push(Object.values(temp));