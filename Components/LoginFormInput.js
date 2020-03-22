import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export const LoginFormInput = ({ type, onChangeText, placeholder, icon,secureTextEntry, onSubmitEditing, reference }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={30} style={styles.icon} />
            <TextInput
                style={styles.inputStyles}
                placeholder={placeholder}
                placeholderTextColor='white'
                keyboardType={type}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                ref={reference}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        opacity: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        padding : 10,
    },
    inputStyles: {
        color: 'white',
        opacity: 0.8,
        width : '90%',
        textAlignVertical : 'center',
        paddingLeft : 15,
        padding : 0,
        fontSize : 17
    },
    icon: {
        color :'white',
        opacity : 0.8
    }
})
