import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require("../assets/background1.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/firebird-logo.png")}/>
                <Text>Sell What You Don't Need!</Text>
            </View>
            <View style={styles.login}>Login</View>
            <View style={styles.register}>Register</View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",    
    },
    login: {
        width: "100%",
        height: 60,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
        color: colors.white,
    },
    register: {
        width: "100%",
        height: 60,
        backgroundColor: colors.secondary,
        borderRadius: 20,
        alignItems:"center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
        color: colors.white,
    },
});

export default WelcomeScreen;