import React, { useRef, useState } from "react";
import { Animated, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { firebase, firebaseConfig, db, getUserDocument, realtime } from '../../firebase/config'


const user = firebase.auth().currentUser;


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}
// const { navigate } = this.props.navigation;

export default class InterestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
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

    }


    handleOnPress = () => {
        this.setState({
            opacityTest: 0.5
        })
    }

    onLinkPress = () => {
        this.props.navigation.navigate('Home', { user })
    }


    onpress1 = () => {
        if (!this.state.check1) {
            this.setState({
                // opacity1: 1,
                check1: true,
                buttonColor1: '#67C495'

            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                covid: true
            })
           
        }
        else {
            this.setState
                ({
                    check1: false,
                    buttonColor1: '#8fbc8f'
                })
                const keys = []
                const userRef = firebase.database().ref("users");
                const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
                const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
                const path = choosenRef.toString();
                console.log(path)
        
                choosenRef.update({
                    covid: false
                })
         
        }
    }
    onpress2 = () => {
        if (!this.state.check2) {
            this.setState({
                check2: true,
                buttonColor2: '#67C495'

            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                mentalBool: true
            })
           
        } else {
            this.setState({
                check2: false,
                buttonColor2: '#8fbc8f'
            })

            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                mentalBool: false
            })
           
        }
    }
    onpress3 = () => {
        if (!this.state.check3) {
            this.setState({
                check3: true,
                buttonColor3: '#67C495'
            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                nutrition: true
            })
          
        } else {
            this.setState({
                check3: false,
                buttonColor3: '#8fbc8f'
            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                nutrition: false
            })
        }
    }
    onpress4 = () => {
        if (!this.state.check4) {
            this.setState({
                check4: true,
                buttonColor4: '#67C495'
            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                exBool: true
            })
           
        } else {
            this.setState({
                check4: false,
                buttonColor4: '#8fbc8f'
            })
            const keys = []
            const userRef = firebase.database().ref("users");
            const uidRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
            const choosenRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/" + "Chosen")
            const path = choosenRef.toString();
            console.log(path)
    
            choosenRef.update({
                exBool: false
            })
          
        }

    }
    render() {
        return (

            <View style={styles.container}>
                <FadeInView style={{ width: 300, height: 200 }}>
                    <Text style={{
                        color: "black", fontWeight: 'bold', fontSize: 35, fontFamily: "System"
                    }}>Please select all topics that interest you!
            </Text>
                    <Text>{'\n'}</Text>

                </FadeInView>


                <View style={styles.innerContainer}>
                    <View style={{ flexDirection: "row" }} >

                        <View style={styles.sideContainer}>

                            <Button
                                onPress={() => this.onpress1()}
                                color={this.state.buttonColor1}
                                mode="contained"
                                style={{
                                    borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                                    shadowOpacity: 0.9, elevation: 5,
                                    backgroundColor: this.state.buttonColor1
                                }}
                            >

                                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                                    <Text style={{
                                        color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                                    }}>COVID-19/Vaccines</Text>

                                </View>
                            </Button>
                            <Text>{'\n'}    </Text>



                            <Button
                                onPress={() => this.onpress2()}
                                color={this.state.buttonColor2}
                                mode="contained"
                                style={{
                                    borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                                    shadowOpacity: 0.9, elevation: 5,
                                    backgroundColor: this.state.buttonColor2
                                }}
                            >

                                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                                    <Text style={{
                                        color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                                    }}>Postpartum Mental Health</Text>

                                </View>
                            </Button>

                        </View>
                        <Text>{'\n'}    </Text>
                        <Text>{'\n'}    </Text>

                        <View style={{ flex: 1, justifyContent: "left" }}>

                            <Button
                                onPress={() => this.onpress3()}
                                color={this.state.buttonColor3}
                                mode="contained"
                                style={{
                                    borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                                    shadowOpacity: 0.9, elevation: 5,
                                    backgroundColor: this.state.buttonColor3
                                }}
                            >

                                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                                    <Text style={{
                                        color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                                    }}>Nutrition</Text>

                                </View>
                            </Button>

                            <Text>{'\n'}    </Text>

                            <Button
                                onPress={() => this.onpress4()}
                                color={this.state.buttonColor4}
                                mode="contained"
                                style={{
                                    borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
                                    shadowOpacity: 0.9, elevation: 5,
                                    backgroundColor: this.state.buttonColor4
                                }}
                            >

                                <View style={{ flex: 5, justifyContent: "center", fontFamily: "System" }}>
                                    <Text style={{
                                        color: "black", fontFamily: "System", fontSize: 20, fontWeight: '500',
                                    }}>Exercise</Text>

                                </View>
                            </Button>



                        </View>
                       


                    </View>
                    <Text>{'\n'}    </Text>

                </View>

                <View style={{
                            flex: 1,
                            alignItems: "center",
                            marginTop: 20
                        }}>

                        <Button onPress={() => this.onLinkPress()}  style={{
                                    borderRadius: 20, width: 160, height: 50, shadowColor: 'black',
                                    shadowOpacity: 0.9, elevation: 5,
                                    backgroundColor: '#79F5B7'
                                }}>
                            <Text>Done</Text>
                        </Button>
                        </View>


            </View>

        )

    }

}



