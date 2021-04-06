import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 5,
        // alignItems: 'center'
        
            padding: 25,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
    },
    title: {

    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        padding: 40,
      },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    MainContainer: {
        flex: 1,
        margin: 10
        
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
      },
      sideContainer: {
          flex:1,
          paddingLeft: 8,
          paddingRight: 8
      },


     
      TextStyle:{
        fontSize : 25,
         textAlign: 'center',
         //paddingTop: 40,
paddingLeft: 15,
flexDirection: 'row',
justifyContent: 'space-between',
      },



   
})