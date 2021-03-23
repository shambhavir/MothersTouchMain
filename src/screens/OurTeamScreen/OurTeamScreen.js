import * as React from 'react';
import { Button, View, Text } from 'react-native';

import styles from './styles';

export default function OurTeamScreen(props) { //in future if need for more navigation, need to replace props with navigation hehe
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', justifyContent: 'left', marginVertical: 20,  marginHorizontal: 25 }}>
      <Text>Some information about the vaccine.</Text>
      <Text></Text>
      <Button
        title="Go to something" //random button if needed in future to navigate to somewhere else. 
        //onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
