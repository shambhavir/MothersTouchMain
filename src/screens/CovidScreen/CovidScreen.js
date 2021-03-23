import * as React from 'react';
import { Button, View, Text } from 'react-native';

import styles from './styles';

{/*export default function CovidScreen(props) { //in future if need for more navigation, need to replace props with navigation hehe
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', justifyContent: 'left', marginVertical: 20,  marginHorizontal: 25 }}>
        <Text>Covid-19 Information for expecting</Text>
        <Text>mothers:</Text>
        <Button
          title="Go to something"
          //onPress={() => navigation.push('Details')}
        />
        
        {/*<Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
}*/}

export default function CovidScreen(props) { //in future if need for more navigation, need to replace props with navigation hehe
    return (
        <View style = { styles.container }> <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', justifyContent: 'left', marginVertical: 20,  marginHorizontal: 25 }}></View>
            <Text>Covid-19 Information for expecting</Text>
            <Text>mothers:</Text>
            <Button
                title="Go to something"
                //onPress={() => navigation.push('Details')}
                />
        
            {/*<Button
                 title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />*/}
      </View>
    );
}