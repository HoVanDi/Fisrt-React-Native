import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from "react-native";
const SignUp = () => {
    const background = require('../../assets/13promaxsignup.png')
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text} >Sign Up to Shh!</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.btnSignup}>
                    <Image
                        style={styles.icongg} source={require('../../assets/icongg.png')} />
                    Sign Up with Google
                </Text>
                <View style={styles.loginWithEmail}>
                    <View style={styles.underline} />
                    <Text>Or continue with Email</Text>
                    <View style={styles.underline} />
                </View>
                <TextInput style={styles.boxUserName} placeholder="Enter your Name" />
                <TextInput style={styles.boxUserName} placeholder="Enter username" />
                <TextInput style={styles.boxUserName} placeholder="Enter Email" />
                <TextInput style={styles.boxUserName} placeholder="Enter Passwork" />
            </View>
            <View style={styles.massege}>
                <View style={styles.textbox} >
                </View>
                <Text style={styles.textMassege} >I agree with the Terms of Service and Privacy policy
                </Text>
            </View>

            <Text style={styles.btnAccount}>
                Create Account
            </Text>
            <Text style={styles.MassegeQuestion} >Already have an account?
            </Text>
                <Text style={styles.login} >login
                </Text>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 40,
        flex: 1,
        alignItems: 'center',
        fontWeight: 734,
    },
    text: {
        fontSize: 30,
        color: '#fff',
    },

    btn: {
        position: 'relative',
        marginTop: -200,
        fontWeight: 734,
        flex: 1,
        alignItems: 'center',
    },

    btnSignup: {
        fontSize: 15,
        color: '#fff',
        backgroundColor: '#000',
        width: 306,
        height: 56,
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 14,
    },

    massege: {
        marginRight: 35,
        fontSize: 12,
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
    },

    textbox: {
        marginRight: 240,
        marginTop: 40,
        zIndex: 1,
        flex: 1,
        width: 20,
        maxHeight: 20,
        backgroundColor: '#fff'
    },


    textMassege: {
        marginTop:-29,
        color: '#fff',
        fontSize: 12,
        marginLeft: 47,
        // width:300,
    },

    textSignUp: {
        fontSize: 15,
        marginRight: 10,
        color: '#000',
    },

    icongg: {
        fontSize: 15,
        marginRight: 10,
        width: 20, height: 20
    },

    boxUserName: {
        color: '#fff',
        backgroundColor: '#fff',
        width: 306,
        height: 45,
        borderRadius: 50,
        marginTop: 10,
        // textAlign: 'center',
        paddingLeft: 40,

    },

    userNameSecond: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: -210,
    },

    Forgot: {
        // flex:1,
        top: 245,
        right: 50,
        position: 'absolute',
    },

    loginWithEmail: {
        marginTop: 20,
        flexDirection: 'row', // Hiển thị văn bản và gạch chân theo hàng ngang
        alignItems: 'center', // Căn chỉnh các phần tử theo trục dọc
    },

    underline: {
        width: 10,
        flex: 1,
        borderBottomWidth: 1, // Độ dày của gạch chân
        borderBottomColor: '#000', // Màu sắc của gạch chân
        marginLeft: 10, // Khoảng cách giữa văn bản và gạch chân
        marginRight: 10, // Khoảng cách giữa gạch chân và văn bản bên phải
    },

    btnAccount: {
        flex: 1, 
        color:'#fff',
        backgroundColor: '#000',
        borderRadius: 50,
        padding: 20,
        position: 'absolute',
        right: '10%',
        top: '74%',
    },

    MassegeQuestion: {
        flex: 1,
        color:"#fff",
        position: 'absolute',
        bottom: '14%',
        right:'5%',
    },

    login: {
        flex: 1,
        position: 'absolute',
        bottom: '11%',
        right: '25%',
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
    },
});
export default SignUp;