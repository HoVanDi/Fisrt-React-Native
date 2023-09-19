import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
const header = () => {
    const background = require('../../assets/13promax.png')
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text} >Welcome To Shh!</Text>
                <Text style={styles.headingtext}>A Hub Where Whispers Echo Loudest</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.btnSignup}>Sign up</Text>
            </View>
            <View style={styles.massege}>
                <Text style={styles.textMassege} >Already have an account?
                    <Text style={styles.textLogin}>Login</Text>
                </Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 41,
        flex: 1,
        width: 264,
        fontWeight: 734,
    },
    text: {
        fontSize: 40, 
        color: '#fff', 
    },


    headingtext: {
        width: 342,
        flex: 1,
        fontSize: 20,
        color: '#1E1E1E',
    },

    btn: {
        marginTop:100,
        fontWeight: 734,
        flex: 1,
        alignItems:'center',
    },

    btnSignup: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#000',
        width: 284,
        height:59,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop:15,
    },

    massege: {
        fontSize: 15,
        flex: 1,
        alignItems: 'center',
        display:'flex'
    },

    textMassege: {
        marginTop: -50,
        color: '#fff',
    },

    textLogin: {
        color: '#000',
    },

    backgroundImage: {
        width: '100%', 
        height: '100%', 
    },
});
export default header;