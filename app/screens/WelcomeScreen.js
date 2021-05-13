import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import AppButton from '../component/AppButton';
import AppText from '../component/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius= {8}
            source={require("../assets/background1.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/firebird-logo.png")}/>
                <AppText style={styles.tagline}>Sell What You Don't Need!</AppText>
            </View>
            <View style={styles.btnContainer}>
                <AppButton title="Login" color="primary" onPress={() => console.log("Login button clicked!!")}/>
                <AppButton title="Register" color="secondary" onPress={() => console.log("Register button clicked!!")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    btnContainer: {
        padding: 20,
        width: "100%"
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
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,

    }
});

export default WelcomeScreen;