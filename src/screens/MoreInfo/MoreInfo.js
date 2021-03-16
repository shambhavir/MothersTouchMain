import React, { useState, Component } from 'react'
import { Platform, Stylesheet, ScrollView, Button, TouchableHighlight, Modal, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


import { firebase, firebaseConfig, db } from '../../firebase/config'
import "firebase/auth";
import "firebase/firestore";

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            bp: 0
        };
        //.getRef().child('users');
        // this.bp = 0; 
    }
    //infoRef = this.getRef().child('users');
    

    // setModalVisible(visible) {
    //     this.setState({ modalVisible: visible });
    // }
    getRef() {
        return firebase.database().ref();
    }
    // getInfoRef = () => {
    //     this.getRef().child('users').child(this.state.bp)
    // }

    componentDidMount() {
       // db.collection("users").doc(user.uid).update(
            //         {
            //             hasOptedIn: true
            //         }
            //     )
            //firebase.auth().currentUser
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                bloodPressure: this.state.bp
            }
        )
       
    }
    updateInfo = () => {
        db.collection("users").doc(firebase.auth().currentUser.uid).update(
            {
                bloodPressure: this.state.bp
            }
        )
        //this.setModalVisible(!this.state.modalVisible)
    }
    // updateItem() {
    //     //this.setModalVisible(true);
    // }

    render() {

        return (
            <View style={styles.container}>
                {/* <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => { }}
                > */}
                    <Text>Edit the details and Update.</Text>
                    <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    //`${value}` `${this.state.bp}`
                        value={`${this.state.bp}`}
                        onChangeText={(bp) => this.setState({ bp })}

                    />
                    {/* <TextInput
                        value={this.state.itemIng}
                        onChangeText={(itemIng) => this.setState({ itemIng })}

                    />
                    <TextInput
                        value={this.state.itemSteps}
                        onChangeText={(itemSteps) => this.setState({ itemSteps })}

                    /> */}

                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Button onPress={
                                this.updateInfo
                            }
                                title="Save Data"
                            >
                            </Button>
                            <Button
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                title="Cancel"
                            >
                            </Button>
                        </View>
                    </View>
                {/* </Modal> */}


                {/* <ImageBackground
                >
                    <ScrollView style={styles.container2} showsVerticalScrollIndicator={false}>
                        <Text style={styles.heading1}>
                            Ingredients
                </Text>
                        <Text style={styles.heading2}>
                            {this.props.ing}
                            {this.props._key}
                        </Text>

                        <Text style={styles.heading1}>
                            Steps
                </Text>
                        <Text style={styles.heading2}>
                            {this.props.steps}
                        </Text>
                    </ScrollView>
                </ImageBackground> */}

                <View style={styles.action}>
                    <TouchableHighlight
                        underlayColor='#24ce84'
                        onPress={this.updateInfo.bind(this)}
                    >
                        <Text style={styles.actionText}>Update Recipe</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
    // handleCodeChange = (newVal, itemIndex) => {
    //     let item = this.state.items[itemIndex]
    //     let newItem = Object.assign(item, { [key]: newVal })
    //     let oldItems = this.state.items
    //     oldItems[itemIndex] = newItem
    //     this.setState({
    //         items: oldItems,
    //         editedCode:newItem
    //     })
    // }

    // updateItems = () => {
    //     let object = this.state.editedCode
    //     e.preventDefault()
    //     firebase.database().ref().child('users').child(object.firebaseUrl).once("value", function (snapshot) {
    //         snapshot.ref.update({
    //             text: object.text,
    //         }, () => {
    //             console.log("record updated")
    //         })
    //     });
    // }

//     render() {

//         let itemNodes = this.state.items.map ((item, itemIndex) => {
//             return (
//                 <div>
//                     <TextInput
//                         placeholder="Blood Pressure"
//                         onChangeText={(e) => this.handleCodeChange(e.target.value, item.text)}
//                         value={item.text}
//                     />
//                     {/* <TextInput
//                         placeholder="Ingredients"
//                         onChangeText={(e) => this.handleCodeChange(e.target.value, item.ingText)}
//                         value={item.ingText}
//                     />
//                     <TextInput
//                         placeholder="Steps"
//                         onChangeText={(e) => this.handleCodeChange(e.target.value, item.stepsText)}
//                         value={item.stepsText}
//                     /> */}
//                 </div>
//             )
//         })


//         return (
//             <View style={styles.container}>
//                 <Modal
//                     visible={this.state.modalVisible}
//                     animationType={'slide'}
//                     onRequestClose={() => { }}
//                 >
//                     <Text>Edit the details and Update.</Text>
//                     {itemNodes}
//                     <View style={styles.modalContainer}>
//                         <View style={styles.innerContainer}>
//                             <Button onPress={this.updateItems}
//                                 title="Save Data"
//                             >
//                             </Button>
//                             <Button
//                                 onPress={() => this.setModalVisible(!this.state.modalVisible)}
//                                 title="Cancel"
//                             >
//                             </Button>
//                         </View>
//                     </View>
//                 </Modal>
//             </View>
//         );
//     }


// }



// export default function MoreInfo({ navigation }) {
//     var bp = useState(0)
//     var age = useState(0)
//     var monthsPreg = useState(0)

    //to properly save data 
    // React.useState({
    //     items: [],
    //     editedCode:{}
    // })
    // const user = firebase.auth().currentUser;

    // const getRef = () => 
    // {
    //     return firebase.database().ref();
    // }
    // const handleCodeChange = (newVal, itemIndex) => 
    // {
    //     let item = React.useState.items[itemIndex]
    //     let newItem = Object.assign(item, { [key]: newVal })
    //     let oldItems = React.useState.items
    //     oldItems[itemIndex] = newItem
    //     React.useState({
    //         items: oldItems,
    //         editedCode: newItem
    //     })
    // }
    // const updateItems = () => 
    // {
    //     // const userRef = db.collection("users").doc(user.uid).update(
    //     //     {
    //     //         bloodPressure: bp
    //     //     }
    //     // )
    //     let object = React.useState.editedCode
    //     e.preventDefault()
    //     getRef().child('users').child(object.firebaseUrl).once("value", function (snapshot) {
    //         snapshot.ref.update({
    //             bloodPressure: bp
    //         }, () => {
    //             console.log("record updated")
    //         })
    //     });
    // }

    // const onSubmitPress = () => {
    //     db.collection("users").doc(user.uid).update(
    //         {
    //             hasOptedIn: true
    //         }
    //     )
    //     navigation.navigate('Home', { user })

    // }
//     return (
//         <View style={styles.container}>
//             <KeyboardAwareScrollView
//                 style={{ flex: 1, width: '100%' }}
//                 keyboardShouldPersistTaps="always">
//                 <Image
//                     style={styles.logo}
//                     source={require('../../../assets/icon.png')}
//                 />

//                 {<TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Blood Pressure'
//                     keyboardType={'numeric'}
//                     onChangeText={
//                         (text) => {
//                             const userRef = db.collection("users").doc(user.uid).update(
//                                 {
//                                     bloodPressure: bp
//                                 }
//                             )
//                         //(e) => handleCodeChange(e.target.value, bp)

//                         }}
//                     value={bp}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />}
//                 {/* {<TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Months Pregnant'
//                     onChangeText={
//                         (text) => {
//                             const userRef = db.collection("users").doc(user.uid).update(
//                                 {
//                                     monthsPreg: text
//                                 }
//                             )

//                         }}
//                     value={monthsPreg}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />}  */}
//                 {/* {<TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Age'
//                     onChangeText = {
//                         (text) => {
//                             const userRef = db.collection("users").doc(user.uid).update(
//                                 {
//                                     age: text
//                                 }
//                             )
//                         }}
//                     value={age}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />} */}
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => onSubmitPress()}>
//                     <Text style={styles.buttonTitle}>Submit Data</Text>
//                 </TouchableOpacity>
//             </KeyboardAwareScrollView>
//         </View>
//     )
// }
