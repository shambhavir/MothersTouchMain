import React, { useState, Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Modal, Button, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
// import Card from './Card';
import { Card } from 'react-native-shadow-cards';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { FAB, Portal } from 'react-native-paper';

const user = firebase.auth().currentUser;
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            bp1: '',
            bp2: '',
            ag: '',
            mp: '',
            intVal: [],
            dash: '',
            data1: [],
            data2: [],
            test: '',
            test2: '',
            isVisible: false,
            isModalVisible: false,
            setModalVisible: false
        };
    }
    // toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    //     this.setState
    //   }
    componentDidMount() {
        const keys = []
        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();
        bpRef.once('value').then(snapshot => {
            snapshot.forEach(item => {
                const userObj = snapshot.val();
                var temp = item.val().systolic;
                var temp2 = item.val().dystolic;
                this.setState(
                    {
                        test: temp,
                        test2: temp2
                    }
                )
                this.setState(prevState => ({ //works?!
                    data1: [...prevState.data1, temp]
                }))
                this.setState(prevState => ({ //works?!
                    data2: [...prevState.data2, temp2]
                }))
                return false;
            });
        });
    }
    displayModal(show) {
        this.setState({ isVisible: show })
    }
    updateInfo = () => {
        const keys = []

        const userRef = firebase.database().ref("users");
        const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        const bpRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "BloodPressure")
        const path = bpRef.toString();
        bpRef.push({
            systolic: this.state.bp1,
            dystolic: this.state.bp2,
            date: Date.now(),
        })

    }
    render() {
        console.log(this.state.data2)
        return (
            <Portal.Host>
                <View style={styles.MainContainer}>
                    <ScrollView>
                        <Modal
                            animationType={"slide"}
                            transparent
                            visible={this.state.isVisible}
                            presentationStyle="overFullScreen"
                            style={{ borderRadius: 20 }}
                            justifyContent={'flex-end'}
                        >
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <View style={{
                                    backgroundColor: "#fff",
                                    width: 300,
                                    height: 300,
                                }}>
                                    <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
                                        <TextInput
                                            style={styles.input}
                                            placeholderTextColor="#aaaaaa"
                                            secureTextEntry
                                            placeholder='Systolic'
                                            underlineColorAndroid="transparent"
                                            autoCapitalize="none"
                                            multiline
                                            onChangeText={(bp1) => this.setState({ bp1 })}
                                            value={`${this.state.bp1}`}

                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholderTextColor="#aaaaaa"
                                            secureTextEntry
                                            placeholder='Dystolic'
                                            underlineColorAndroid="transparent"
                                            autoCapitalize="none"
                                            multiline
                                            onChangeText={(bp2) => this.setState({ bp2 })}
                                            value={`${this.state.bp2}`}

                                        />
                                      
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={this.updateInfo}
                                        >
                                            <Text style={styles.buttonTitle}>Submit Data</Text>
                                        </TouchableOpacity>
                                        <Button title="Close" onPress={() =>!this.setState({isVisible:false})} />

                                    </KeyboardAwareScrollView >
                                </View>
                            </View>
                        </Modal>
                        <View style={styles.innerContainer}>
                            <Text style={styles.TextStyle}>Your Blood Pressure Records</Text>
                            <View style={{flexDirection:"row"}}>
                            <View style={styles.sideContainer}>
                                {this.state.data1.map((d, i) =>
                                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120, width: 140 }} key={i}>
                                        <Text>
                                            <Text key={i} style={styles.TextStyle}>{d}</Text>
                                           
                                        </Text>
                                    </Card>
                                )}
                            </View>
                            <View style={{flex:1}}>

                                 {this.state.data2.map((d, i) =>
                                    <Card style={{ padding: 10, margin: 10, borderRadius: 20, height: 120, width: 140 }} key={i}>
                                        <Text>
                                            <Text key={i} style={styles.TextStyle}>{d}</Text>
                                           
                                        </Text>
                                    </Card>
                                )}
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <FAB
                        style={styles.fab}
                        large
                        icon="plus"
                        onPress={() => {
                            this.displayModal(true);
                        }}
                    />
                </View>
            </Portal.Host>
        )
    }
}
