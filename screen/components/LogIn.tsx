import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
const LogIn = () => {
    const background = require('../../assets/13promaxlogin.png')
    return (
        <ImageBackground
            source={background}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text} >Log in to Shh!</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.btnSignup}>
                    <Image
                        style={styles.icongg} source={require('../../assets/icongg.png')}/>
                    Log in with Google
                </Text>
                <View style={styles.loginWithEmail}>
                    <View style={styles.underline} />
                    <Text>Or log in with Email</Text>
                    <View style={styles.underline} />
                </View>
                <Text style={styles.userName} >Already have an account?</Text>
                <Text style={styles.boxUserName}></Text>
                <Text style={styles.userNameSecond} >Passwork</Text>
                
                <Text style={styles.Forgot} >Forgot</Text>
                <Text style={styles.boxUserName}></Text>
            </View>


            <View style={styles.massege}>
                <Text style={styles.textMassege} >Already have an account? 
                </Text>
                <Text style={styles.textSignUp}>SignUp?</Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({

    container: {
        marginLeft: 20,
        marginTop: 60,
        flex: 1,
        alignItems: 'center',
        fontWeight: 734,
    },
    text: {
        fontSize: 30,
        color: '#fff',
    },


    btn: {
        position:'relative',
        marginTop: -200,
        fontWeight: 734,
        flex: 1,
        alignItems: 'center',
    },

    btnSignup: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#000',
        width: 306,
        height: 56,
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 10,
        display: 'flex',
        justifyContent: "space-between",
    },

    massege: {
        marginRight:35,
        fontSize: 15,
        flex: 1,
        alignItems: 'center',
        display: 'flex'
    },

    userName: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: -100,
    },

    textMassege: {
        marginTop:100,
        color: '#fff',
        marginRight:40,
    },

    textSignUp: {
        fontSize:15,
        marginRight: 10,
        color: '#000',
    },

    icongg: {
        marginRight: 10,
        width: 20, height: 20
    },

    boxUserName: {
        color: '#fff',
        backgroundColor: '#fff',
        width: 306,
        height: 56,
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 10,
        display: 'flex',
        justifyContent: "space-between",
    },

    userNameSecond: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: -210,
    },

    Forgot: {
        // flex:1,
        top: 245,
        right:50,
        position:'absolute',
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

    backgroundImage: {
        width: '100%',
        height: '100%',
    },
});
export default LogIn;