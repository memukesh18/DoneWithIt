import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon}/>}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        color: defaultStyles.colors.medium,
    },
});

export default AppTextInput;