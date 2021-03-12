import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'

export default function MoreInfo({navigation})
{
    const [hasOptedIn, setInfo] = useState('')
    const [bloodPressure, setBP] = useState('')
    const [age, setAge] = useState('')
    const [monthsPreg, setMP] = useState('')

    return (
        <View>
        <Text>Home Screen</Text>
    </View>
    )

}